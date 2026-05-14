import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Constellation } from "./Constellation";
import { SplineRobot } from "./SplineRobot";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B5es";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100dvh] flex items-center pt-24 sm:pt-28 overflow-hidden"
    >
      {/* Layer 1: Radial gradient bg */}
      <div
        className="absolute inset-0 bg-hero-radial"
        aria-hidden
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Layer 2: Ambient glow behind robot */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse 55% 65% at ${78 + mousePos.x * 3}% ${52 + mousePos.y * 2}%, oklch(0.38 0.14 260 / 0.32) 0%, oklch(0.28 0.10 260 / 0.14) 45%, transparent 70%)`,
          transform: `translateY(${scrollY * 0.1}px)`,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Layer 3: Constellation with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)` }}
      >
        <Constellation />
      </div>

      {/* Layer 4: Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(0.62 0.2 260 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.62 0.2 260 / 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent 70%)",
          transform: `translateY(${scrollY * 0.05}px) perspective(1000px) rotateX(60deg) translateY(-20%)`,
          transformOrigin: "center top",
        }}
        aria-hidden
      />

      {/* Layer 5: Particles */}
      <ParticleField />

      {/* Layer 6: Spline robot */}
      <div className="hidden md:block absolute inset-0 z-[1]">
        <div
          className="absolute top-0 bottom-0 right-0 w-[65%]"
          style={{ transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -8}px) translateY(${scrollY * 0.08}px)` }}
        >
          <SplineRobot />
        </div>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, oklch(0.14 0.025 265) 0%, oklch(0.14 0.025 265) 30%, oklch(0.14 0.025 265 / 0.88) 45%, oklch(0.14 0.025 265 / 0.35) 62%, transparent 82%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[18%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to bottom, oklch(0.14 0.025 265), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[22%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to top, oklch(0.14 0.025 265), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="container-zerek relative z-[2] py-16 -translate-y-10">
        <div className="max-w-2xl">
          <Reveal delay={80}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-glow mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Nova geração de automação com IA
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-2 text-[42px] sm:text-6xl lg:text-[72px] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <span className="block">Atende no</span>
              <span className="block">automático.</span>
              <span className="block text-gradient mt-1">Cresce com IA.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Agentes de IA, site e CRM sob medida pro seu negócio. Captação, recuperação de vendas e pós-venda — tudo integrado e rodando 24/7.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href={WHATSAPP}>
                <MessageCircle className="h-4 w-4" />
                Agendar diagnóstico
              </MagneticButton>
              <a
                href="#solucoes"
                className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-surface transition-all duration-300"
              >
                Ver soluções
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              {["Sem fidelidade", "Implementação em 7 dias", "Suporte humano dedicado"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-[3]"
        style={{ backgroundImage: "linear-gradient(to bottom, transparent, oklch(0.14 0.025 265))" }}
      />
    </section>
  );
}

function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="btn-magnetic pulse-glow inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </a>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; alpha: number }> = [];
    const mouse = { x: -1000, y: -1000 };
    let raf = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx -= (dx / dist) * force * 0.02;
          p.vy -= (dy / dist) * force * 0.02;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.74 0.16 255 / ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `oklch(0.62 0.20 260 / ${0.12 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();
    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 0.7 }}
    />
  );
}
