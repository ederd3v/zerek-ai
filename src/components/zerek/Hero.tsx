import { ArrowRight, MessageCircle } from "lucide-react";
import { Constellation } from "./Constellation";
import { SplineRobot } from "./SplineRobot";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B75es";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* bg base */}
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />

      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 72% 52%, oklch(0.42 0.18 260 / 0.38) 0%, oklch(0.32 0.14 260 / 0.18) 45%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 100% 90% at 75% 52%, oklch(0.55 0.20 260 / 0.10) 0%, transparent 60%)",
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

      {/* ── ROBÔ ── */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-0 bottom-0 right-0 w-[65%]">
          <SplineRobot />
        </div>

        {/* gradiente mobile */}
        <div
          className="md:hidden absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.16 0.03 265) 0%, oklch(0.16 0.03 265) 40%, oklch(0.16 0.03 265 / 0.80) 55%, oklch(0.16 0.03 265 / 0.30) 72%, transparent 92%)",
          }}
        />

        {/* gradiente desktop */}
        <div
          className="hidden md:block absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.16 0.03 265) 0%, oklch(0.16 0.03 265) 28%, oklch(0.16 0.03 265 / 0.85) 42%, oklch(0.16 0.03 265 / 0.35) 58%, transparent 78%)",
          }}
        />

        {/* fade topo */}
        <div
          className="absolute top-0 left-0 right-0 h-[18%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to bottom, oklch(0.16 0.03 265), transparent)" }}
        />
        {/* fade base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[20%] z-10 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to top, oklch(0.16 0.03 265), transparent)" }}
        />
      </div>

      {/* ── CONTEÚDO ── */}
      <div className="container-zerek relative z-[2] w-full">
        <div className="max-w-[520px] xl:max-w-[580px]">

          {/* headline — clamp escala suavemente com a largura da tela */}
          <Reveal delay={80}>
            <h1
              className="leading-[1.04] font-extrabold tracking-[-0.03em] antialiased"
              style={{ fontSize: "clamp(36px, 4vw, 72px)" }}
            >
              <span className="block text-foreground">Atende no</span>
              <span className="block text-foreground">automático.</span>
              <span className="block text-gradient mt-1">Cresce com IA.</span>
            </h1>
          </Reveal>

          {/* subtítulo */}
          <Reveal delay={160}>
            <p
              className="mt-5 text-muted-foreground leading-relaxed max-w-[420px]"
              style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
            >
              Agentes de IA, Sites e CRM sob medida pro seu negócio.
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

          {/* trust badges — sempre visíveis */}
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
