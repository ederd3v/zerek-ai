import { useEffect, useRef } from "react";

/**
 * Subtle animated dot/line constellation behind the hero.
 * Pure canvas, no deps. Respects reduced motion.
 */
export function Constellation() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0, h = 0, dpr = 1;

    type P = { x: number; y: number; vx: number; vy: number };
    type Bokeh = { x: number; y: number; r: number; baseOpacity: number; phase: number; phaseSpeed: number };
    let points: P[] = [];
    let bokeh: Bokeh[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(60, Math.floor((w * h) / 24000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
      const bokehCount = Math.max(10, Math.min(22, Math.floor((w * h) / 50000)));
      bokeh = Array.from({ length: bokehCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.9,
        r: 1.5 + Math.random() * 4.5,
        baseOpacity: 0.06 + Math.random() * 0.16,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.004 + Math.random() * 0.008,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const maxDist = 140;
      for (const p of points) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }

      // bokeh LED glow dots
      for (const b of bokeh) {
        b.phase += b.phaseSpeed;
        const alpha = b.baseOpacity * (0.65 + 0.35 * Math.sin(b.phase));
        const glowR = b.r * 4;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, glowR);
        grad.addColorStop(0, `rgba(230, 240, 255, ${alpha * 1.8})`);
        grad.addColorStop(0.35, `rgba(190, 215, 255, ${alpha * 0.6})`);
        grad.addColorStop(1, `rgba(96, 165, 250, 0)`);
        ctx.beginPath();
        ctx.arc(b.x, b.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        // bright center pinpoint
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha * 3.5)})`;
        ctx.fill();
      }

      // lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.18;
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // dots
      for (const p of points) {
        ctx.fillStyle = "rgba(148, 163, 184, 0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none opacity-70"
    />
  );
}
