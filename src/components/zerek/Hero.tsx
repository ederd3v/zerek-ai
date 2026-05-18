import { ArrowRight, MessageCircle } from "lucide-react";
import { Constellation } from "./Constellation";
import { SplineRobot } from "./SplineRobot";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B5es";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col md:items-center pt-24 sm:pt-28 overflow-hidden"
    >
      {/* radial gradient bg */}
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      {/* robot area ambient glow — lighter blue circle behind where the robot sits */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 78% 52%, oklch(0.38 0.14 260 / 0.28) 0%, oklch(0.28 0.10 260 / 0.12) 45%, transparent 70%)",
        }}
      />
      {/* constellation */}
      <div className="absolute inset-0">
        <Constellation />
      </div>
      {/* grid mask */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Spline robot — desktop: absolute right side | mobile: hidden (shown below text) */}
      <div className="hidden md:block absolute inset-0 z-[1]">
        <div className="absolute top-0 bottom-0 right-0 w-[65%]">
          <SplineRobot />
        </div>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.16 0.03 265) 0%, oklch(0.16 0.03 265) 30%, oklch(0.16 0.03 265 / 0.85) 45%, oklch(0.16 0.03 265 / 0.4) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[18%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to bottom, oklch(0.16 0.03 265), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[22%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to top, oklch(0.16 0.03 265), transparent)" }}
        />
      </div>

      <div className="container-zerek relative z-[2] py-16 md:-translate-y-14">
        <div className="max-w-xl">
          <Reveal delay={80}>
            <h1 className="mt-7 text-[40px] sm:text-6xl lg:text-[68px] leading-[1.06] font-extrabold tracking-[-0.03em]">
              <span className="block">Atende no</span>
              <span className="block">automático.</span>
              <span className="block text-gradient">Cresce com IA.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Agentes de IA, site e CRM sob medida pro seu negócio. Captação, recuperação de vendas e pós-venda — tudo integrado.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.62_0.2_260/0.55)] hover:shadow-[0_0_60px_oklch(0.62_0.2_260/0.75)] hover:bg-primary/90 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar diagnóstico
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-surface transition-all"
              >
                Ver soluções
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Sem fidelidade
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Implementação em 7 dias
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Suporte humano
              </div>
            </div>
          </Reveal>
        </div>

        {/* Robot — mobile only, below text */}
        <div className="md:hidden mt-10 relative w-full h-[340px]">
          <SplineRobot />
          <div
            className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(to top, oklch(0.16 0.03 265), transparent)" }}
          />
        </div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[3]"
        style={{ backgroundImage: "linear-gradient(to bottom, transparent, oklch(0.16 0.03 265))" }}
      />
    </section>
  );
}
