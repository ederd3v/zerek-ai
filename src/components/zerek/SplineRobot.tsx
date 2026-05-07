import { useEffect, useRef, useState } from "react";

/**
 * Loads the Spline runtime via dynamic ESM script and renders the 3D robot.
 * Falls back to a custom canvas wireframe robot if Spline fails / times out.
 */
export function SplineRobot() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.id = "spline-canvas-zerek";
    canvas.style.cssText = "width:100%;height:100%;display:block;";
    container.appendChild(canvas);

    let cancelled = false;

    (async () => {
      try {
        // @ts-ignore - external ESM
        const mod = await import(/* @vite-ignore */ "https://unpkg.com/@splinetool/runtime@1.9.59/build/runtime.js");
        if (cancelled) return;
        const app = new mod.Application(canvas);
        await app.load("https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode");
        if (cancelled) return;
        setLoaded(true);
      } catch {
        if (!cancelled) setError(true);
      }
    })();

    const timeout = setTimeout(() => {
      if (!loaded) setError(true);
    }, 8000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      try {
        canvas.remove();
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-12 w-12 rounded-full border-2 border-primary/30 border-t-primary-glow animate-spin" />
        </div>
      )}
      {error && <FallbackRobot />}
    </div>
  );
}

/** Pure-canvas wireframe humanoid robot, used when Spline fails to load. */
function FallbackRobot() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let W = 0,
      H = 0,
      t = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    const project = (x: number, y: number, z: number, cx: number, cy: number, fov = 600) => {
      const s = fov / (fov + z);
      return { x: cx + x * s, y: cy + y * s, s };
    };
    const ry = (x: number, z: number, a: number) => ({
      x: x * Math.cos(a) - z * Math.sin(a),
      z: x * Math.sin(a) + z * Math.cos(a),
    });
    const rx = (y: number, z: number, a: number) => ({
      y: y * Math.cos(a) - z * Math.sin(a),
      z: y * Math.sin(a) + z * Math.cos(a),
    });
    const tf = (px: number, py: number, pz: number, ay: number, ax: number) => {
      const r1 = ry(px, pz, ay);
      const r2 = rx(py, r1.z, ax);
      return { x: r1.x, y: r2.y, z: r2.z };
    };
    const drawFace = (pts: { x: number; y: number }[], color: string, alpha: number) => {
      if (pts.length < 3) return;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      pts.slice(1).forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.closePath();
      ctx.fillStyle = `rgba(${color},${alpha})`;
      ctx.fill();
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);
      const cx = W * 0.5;
      const cy = H * 0.48;
      const scale = Math.min(W, H) * 0.0028;
      const ay = t * 0.4;
      const ax = Math.sin(t * 0.3) * 0.08;

      const p3 = (x: number, y: number, z: number) => {
        const q = tf(x * scale, y * scale, z * scale, ay, ax);
        return project(q.x, q.y, q.z, cx, cy);
      };
      const drawB = (
        x: number,
        y: number,
        z: number,
        bx: number,
        by: number,
        bz: number,
        col: string,
        al: number,
        lw: number,
      ) => {
        const verts = [
          [x - bx, y - by, z - bz],
          [x + bx, y - by, z - bz],
          [x + bx, y + by, z - bz],
          [x - bx, y + by, z - bz],
          [x - bx, y - by, z + bz],
          [x + bx, y - by, z + bz],
          [x + bx, y + by, z + bz],
          [x - bx, y + by, z + bz],
        ];
        const edges: Array<[number, number]> = [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7],
        ];
        const proj = verts.map(([vx, vy, vz]) => {
          const q = tf(vx * scale, vy * scale, vz * scale, ay, ax);
          return project(q.x, q.y, q.z, cx, cy);
        });
        edges.forEach(([a, b]) => {
          const avgZ = (verts[a][2] + verts[b][2]) / 2;
          const dimmed = avgZ > z;
          ctx.beginPath();
          ctx.moveTo(proj[a].x, proj[a].y);
          ctx.lineTo(proj[b].x, proj[b].y);
          ctx.strokeStyle = `rgba(${col},${dimmed ? al * 0.25 : al})`;
          ctx.lineWidth = lw;
          ctx.stroke();
        });
        const faces: number[][] = [
          [0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4],
          [2, 3, 7, 6], [0, 3, 7, 4], [1, 2, 6, 5],
        ];
        faces.forEach((f, fi) => {
          const faceVerts = f.map((i) => verts[i]);
          const avgZ = faceVerts.reduce((s, v) => s + v[2], 0) / 4;
          const facing = fi < 2 ? (fi === 0 ? avgZ < z : avgZ > z) : true;
          if (!facing) return;
          const fproj = f.map((i) => proj[i]);
          const darkness = 0.04 + 0.06 * (1 - (avgZ - z + bz) / (2 * bz));
          drawFace(fproj, col, darkness);
        });
      };

      // aura
      const aura = ctx.createRadialGradient(cx, cy - 20 * scale, 0, cx, cy - 20 * scale, 180 * scale);
      aura.addColorStop(0, "rgba(59,130,246,0.06)");
      aura.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(cx, cy - 20 * scale, 180 * scale, 0, Math.PI * 2);
      ctx.fill();

      // body parts
      drawB(-25, 110, 0, 14, 45, 12, "80,160,255", 0.7, 1.1);
      drawB(25, 110, 0, 14, 45, 12, "80,160,255", 0.7, 1.1);
      drawB(-25, 158, 5, 16, 10, 18, "80,160,255", 0.65, 1);
      drawB(25, 158, 5, 16, 10, 18, "80,160,255", 0.65, 1);
      drawB(0, 70, 0, 30, 18, 20, "80,160,255", 0.55, 1);
      drawB(0, 10, 0, 42, 48, 28, "96,165,250", 0.72, 1.3);

      // chest panel
      const pnl = [p3(-22, -10, -28), p3(22, -10, -28), p3(22, 30, -28), p3(-22, 30, -28)];
      drawFace(pnl, "59,130,246", 0.12 + 0.08 * Math.sin(t * 2));
      ctx.beginPath();
      ctx.moveTo(pnl[0].x, pnl[0].y);
      pnl.slice(1).forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.closePath();
      ctx.strokeStyle = `rgba(96,165,250,${0.5 + 0.3 * Math.sin(t * 2.5)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // arms
      drawB(-62, 5, 0, 14, 42, 14, "80,160,255", 0.68, 1.1);
      drawB(62, 5, 0, 14, 42, 14, "80,160,255", 0.68, 1.1);
      drawB(-68, 65, 4, 11, 35, 11, "80,160,255", 0.62, 1);
      drawB(68, 65, 4, 11, 35, 11, "80,160,255", 0.62, 1);
      drawB(-70, 106, 6, 14, 14, 12, "80,160,255", 0.6, 1);
      drawB(70, 106, 6, 14, 14, 12, "80,160,255", 0.6, 1);

      // neck + head
      drawB(0, -42, 0, 10, 10, 10, "96,165,250", 0.6, 1);
      drawB(0, -75, 0, 36, 34, 30, "120,180,255", 0.78, 1.4);

      // visor
      const visor = [p3(-22, -88, -30), p3(22, -88, -30), p3(26, -62, -30), p3(-26, -62, -30)];
      drawFace(visor, "5,15,40", 0.92);

      // eyes
      const eyeL = p3(-13, -78, -30);
      const eyeR = p3(13, -78, -30);
      const eyePulse = 0.7 + 0.3 * Math.sin(t * 3);
      [eyeL, eyeR].forEach((eye) => {
        const eg = ctx.createRadialGradient(eye.x, eye.y, 0, eye.x, eye.y, 18 * eye.s);
        eg.addColorStop(0, `rgba(96,165,250,${eyePulse * 0.9})`);
        eg.addColorStop(0.5, `rgba(59,130,246,${eyePulse * 0.4})`);
        eg.addColorStop(1, "rgba(59,130,246,0)");
        ctx.beginPath();
        ctx.arc(eye.x, eye.y, 18 * eye.s, 0, Math.PI * 2);
        ctx.fillStyle = eg;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(eye.x, eye.y, 5 * eye.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,230,255,${eyePulse})`;
        ctx.fill();
      });

      // floating orbs
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + t * 0.5;
        const r = 130 + Math.sin(t + i) * 15;
        const ox = Math.cos(a) * r * scale;
        const oy = Math.sin(a) * r * 0.4 * scale - 20 * scale;
        const oz = Math.sin(a) * r * 0.7 * scale;
        const q = tf(ox, oy, oz, 0, 0);
        const op = project(q.x, q.y, q.z, cx, cy);
        const pulse = 0.4 + 0.4 * Math.sin(t * 2 + i * 1.2);
        ctx.beginPath();
        ctx.arc(op.x, op.y, 3 * op.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${pulse})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
