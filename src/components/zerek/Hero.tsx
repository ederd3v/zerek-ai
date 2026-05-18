import { ArrowRight, MessageCircle } from "lucide-react";
import { Constellation } from "./Constellation";
import { SplineRobot } from "./SplineRobot";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B5es";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 overflow-hidden"
    >
      {/* bg base */}
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />

      {/* ambient glow — acompanha o robô em todas as telas */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 72% 52%, oklch(0.38 0.14 260 / 0.22) 0%, oklch(0.28 0.10 260 / 0.10) 50%, transparent 75%)",
        }}
      />

      {/* constellation */}
      <div className="absolute inset-0">
        <Constellation />
      </div>

      {/* grid sutil */}
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

      {/* ── ROBÔ — visível em todas as telas ── */}
      <div className="absolute inset-0 z-[1]">
        {/* robô — mesmo tamanho em mobile e desktop, ancorado à direita */}
        <div className="absolute top-0 bottom-0 right-0 w-[65%]">
          <SplineRobot />
        </div>

        {/* gradiente mobile — proteção mais leve, robô aparece mais à direita */}
        <div
          className="md:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.16 0.03 265) 0%, oklch(0.16 0.03 265) 40%, oklch(0.16 0.03 265 / 0.80) 55%, oklch(0.16 0.03 265 / 0.30) 72%, transparent 92%)",
          }}
        />

        {/* gradiente desktop — original */}
        <div
          className="hidden md:block absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.16 0.03 265) 0%, oklch(0.16 0.03 265) 30%, oklch(0.16 0.03 265 / 0.85) 45%, oklch(0.16 0.03 265 / 0.4) 60%, transparent 80%)",
          }}
        />

        {/* fade topo */}
        <div
          className="absolute top-0 left-0 right-0 h-[18%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to bottom, oklch(0.16 0.03 265), transparent)" }}
        />
        {/* fade base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[22%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to top, oklch(0.16 0.03 265), transparent)" }}
        />
      </div>

      {/* ── CONTEÚDO ── */}
      <div className="container-zerek relative z-[2] py-16 -translate-y-10 md:-translate-y-14">
        <div className="max-w-[520px]">

          {/* headline */}
          <Reveal delay={80}>
            <h1 className="text-[42px] sm:text-6xl lg:text-[68px] leading-[1.04] font-extrabold tracking-[-0.03em] antialiased">
              <span className="block text-foreground">Atende no</span>
              <span className="block text-foreground">automático.</span>
              <span className="block text-gradient mt-1">Cresce com IA.</span>
            </h1>
          </Reveal>

          {/* subtítulo */}
          <Reveal delay={160}>
            <p className="mt-5 text-[15px] sm:text-lg text-muted-foreground leading-relaxed max-w-[400px]">
              Agentes de IA, site e CRM sob medida pro seu negócio.
              Captação, recuperação de vendas e pós-venda — tudo integrado.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.62_0.2_260/0.55)] hover:shadow-[0_0_60px_oklch(0.62_0.2_260/0.75)] hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar diagnóstico
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-7 py-4 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Ver soluções
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* trust badges */}
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {[
                "Sem fidelidade",
                "Implementação em 7 dias",
                "Suporte humano",
              ].map((label) => (
                <div key={label} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>
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
