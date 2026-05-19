import {
  Bot,
  Zap,
  BarChart3,
  Stethoscope,
  Building2,
  Wrench,
  Scissors,
  ShoppingBag,
  Briefcase,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Workflow,
  LayoutDashboard,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B5es";

/* ─────────────────────────────────────────────
   SOLUTIONS
───────────────────────────────────────────── */

const solutions = [
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Atendimento, vendas e agendamento automatizados no WhatsApp, Instagram e site, 24h por dia.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "0 0 40px rgba(59,130,246,0.25)",
    border: "rgba(59,130,246,0.4)",
  },
  {
    icon: Zap,
    title: "Automação",
    desc: "Fluxos automáticos de captação, follow-up, pós-venda e reativação — rodando 24h sem intervenção.",
    gradient: "from-cyan-500 to-blue-400",
    glow: "0 0 40px rgba(6,182,212,0.25)",
    border: "rgba(6,182,212,0.4)",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    desc: "Painéis visuais em tempo real com métricas de vendas, atendimento e performance do negócio.",
    gradient: "from-blue-600 to-indigo-400",
    glow: "0 0 40px rgba(37,99,235,0.25)",
    border: "rgba(37,99,235,0.4)",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Sob Medida",
    desc: "Pipeline de vendas, gestão de clientes e histórico de interações — integrado e automatizado.",
    gradient: "from-indigo-500 to-blue-400",
    glow: "0 0 40px rgba(99,102,241,0.25)",
    border: "rgba(99,102,241,0.4)",
  },
  {
    icon: Globe,
    title: "Sites que Convertem",
    desc: "Landing pages e sites institucionais rápidos, otimizados e conectados às suas automações.",
    gradient: "from-blue-400 to-cyan-500",
    glow: "0 0 40px rgba(96,165,250,0.25)",
    border: "rgba(96,165,250,0.4)",
  },
  {
    icon: Workflow,
    title: "Integração de Sistemas",
    desc: "Conecta CRM, ERP, planilhas e ferramentas. Tudo conversando entre si, sem digitação manual.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "0 0 40px rgba(59,130,246,0.25)",
    border: "rgba(59,130,246,0.4)",
  },
];

function SolutionCard({
  icon: Icon,
  title,
  desc,
  gradient,
  glow,
  border,
}: (typeof solutions)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col h-full rounded-2xl border bg-white/[0.03] backdrop-blur-sm p-7 transition-all duration-300"
      style={{
        borderColor: hovered ? border : "rgba(255,255,255,0.08)",
        boxShadow: hovered ? glow : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* shimmer line on hover */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${border}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>

      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow">
        Saiba mais
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────
   HERO → SOLUTIONS TRANSITION
───────────────────────────────────────────── */

function HeroTransition() {
  return (
    <div className="relative h-32 sm:h-40 overflow-hidden pointer-events-none -mt-1" aria-hidden>
      {/* fade from hero bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.16 0.03 265) 0%, transparent 100%)",
        }}
      />

      {/* 7 beams — cobrindo 0% a 100% da tela */}
      {[
        { left: "2%",  delay: "0s",   dur: "2.3s", opacity: 0.4  },
        { left: "18%", delay: "0.5s", dur: "2.6s", opacity: 0.45 },
        { left: "35%", delay: "1.0s", dur: "2.4s", opacity: 0.35 },
        { left: "50%", delay: "0.2s", dur: "2.8s", opacity: 0.5  },
        { left: "65%", delay: "0.8s", dur: "2.2s", opacity: 0.35 },
        { left: "82%", delay: "0.4s", dur: "2.5s", opacity: 0.45 },
        { left: "98%", delay: "1.2s", dur: "2.3s", opacity: 0.4  },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute top-0 w-px"
          style={{
            left: b.left,
            height: "100%",
            background: `linear-gradient(to bottom, transparent, oklch(0.62 0.2 260 / ${b.opacity}), transparent)`,
            animation: `beamDrop ${b.dur} ease-in-out infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}

      {/* floating dots */}
      {[
        { left: "15%", delay: "0.2s", size: 3 },
        { left: "42%", delay: "1.1s", size: 2 },
        { left: "65%", delay: "0.6s", size: 3 },
        { left: "85%", delay: "1.5s", size: 2 },
      ].map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            background: "oklch(0.62 0.2 260 / 0.7)",
            boxShadow: "0 0 6px oklch(0.62 0.2 260 / 0.5)",
            animation: `dotFall 3s ease-in infinite`,
            animationDelay: d.delay,
          }}
        />
      ))}

      <style>{`
        @keyframes beamDrop {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes dotFall {
          0%   { transform: translateY(-8px); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 0.8; }
          100% { transform: translateY(140px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export function SolutionsSection() {
  return (
    <>
      <HeroTransition />
      <section id="solucoes" className="relative py-20 sm:py-28 overflow-hidden">
      {/* background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.2 260 / 0.3), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-zerek relative">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              Soluções
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Automação com <span className="text-gradient">IA</span> do começo ao fim
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Cada parte da sua empresa rodando no automático, conectada e inteligente.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className="h-full">
              <SolutionCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   AUDIENCE
───────────────────────────────────────────── */

const audiences = [
  { icon: Stethoscope, label: "Clínicas e Consultórios" },
  { icon: Building2,   label: "Imobiliárias" },
  { icon: Wrench,      label: "Mecânicas e Oficinas" },
  { icon: Scissors,    label: "Salões e Estética" },
  { icon: ShoppingBag, label: "Varejo e E-commerce" },
  { icon: Briefcase,   label: "Prestadores de Serviço" },
];

const stats = [
  { value: "24h",  label: "por dia rodando" },
  { value: "7d",   label: "para implementar" },
  { value: "100%", label: "sem fidelidade" },
];

export function AudienceSection() {
  return (
    <section id="para-quem" className="relative py-28 sm:py-36 bg-surface/30 border-y border-border overflow-hidden">
      {/* decorative orb */}
      <div
        className="pointer-events-none absolute -right-48 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, oklch(0.62 0.2 260), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-zerek relative">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              Para quem é
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Automação para quem quer{" "}
              <span className="text-gradient">escalar de verdade</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Se a sua empresa tem processos repetitivos, a Zerek.ai resolve.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
          {audiences.map((a, i) => (
            <Reveal key={a.label} delay={i * 55}>
              <div className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04] hover:-translate-y-0.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-glow ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <a.icon className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <span className="text-sm font-medium leading-tight">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            A Zerek.ai se adapta ao seu negócio, não o contrário.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos os processos da sua empresa e identificamos onde a automação gera mais resultado.",
    color: "oklch(0.62 0.2 260)",
  },
  {
    n: "02",
    title: "Implementação",
    desc: "Construímos as automações sob medida e colocamos pra rodar em até 7 dias.",
    color: "oklch(0.72 0.18 200)",
  },
  {
    n: "03",
    title: "Otimização contínua",
    desc: "Monitoramos os números e ajustamos pra melhorar performance toda semana.",
    color: "oklch(0.68 0.16 150)",
  },
];

function StepCard({ n, title, desc, color, delay }: (typeof steps)[0] & { delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        className="relative rounded-2xl border border-border bg-white/[0.03] p-6 sm:p-8 transition-all duration-400 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderColor: hovered ? color.replace("oklch", "oklch").replace(")", " / 0.4)") : undefined,
          boxShadow: hovered ? `0 0 30px ${color.replace(")", " / 0.15)")}` : undefined,
          transform: hovered ? "translateY(-3px)" : undefined,
        }}
      >
        {/* big number bg */}
        <span
          className="absolute top-4 right-5 text-7xl font-black leading-none select-none transition-opacity duration-300"
          style={{ color, opacity: hovered ? 0.12 : 0.06 }}
        >
          {n}
        </span>

        {/* number badge */}
        <div
          className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300"
          style={{
            borderColor: color.replace(")", " / 0.5)"),
            color,
            boxShadow: hovered ? `0 0 20px ${color.replace(")", " / 0.3)")}` : undefined,
            background: color.replace(")", " / 0.08)"),
          }}
        >
          {n}
        </div>

        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </Reveal>
  );
}

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container-zerek">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              Como funciona
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Do diagnóstico ao resultado{" "}
              <span className="text-gradient">em semanas</span>
            </h2>
          </div>
        </Reveal>

        {/* connecting line desktop */}
        <div className="relative mt-14">
          <div
            className="hidden md:block absolute top-[2.75rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.62 0.2 260 / 0.5) 30%, oklch(0.72 0.18 200 / 0.5) 60%, transparent)",
            }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <StepCard key={s.n} {...s} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */

const faqs = [
  {
    q: "O que é automação com IA, na prática?",
    a: "É usar inteligência artificial pra fazer tarefas repetitivas no lugar da sua equipe — responder cliente, captar lead, recuperar venda, enviar pesquisa, atualizar planilha. Tudo rodando 24/7, sem esquecer de ninguém e sem cansar.",
  },
  {
    q: "Que tipos de automação vocês fazem?",
    a: "Agentes de IA pra atendimento e vendas, automação de captação de leads, recuperação de vendas perdidas, pós-venda automático (NPS, recompra, reativação), integração entre CRM, ERP e planilhas, e soluções digitais sob medida pra dores específicas do seu negócio.",
  },
  {
    q: "Em quanto tempo eu vejo resultado?",
    a: "A maioria dos clientes começa a sentir a diferença na primeira semana após a automação entrar no ar. Em 30 dias, você já tem dados claros: mais leads, menos tempo gasto em tarefa manual e vendas que antes escapavam.",
  },
  {
    q: "Funciona pro meu tipo de negócio?",
    a: "Se a sua empresa tem processos repetitivos — atender, captar, vender, fazer follow-up, atualizar sistema — funciona. Já implementamos pra clínicas, imobiliárias, mecânicas, salões, lojas e prestadores de serviço.",
  },
  {
    q: "Vou precisar de equipe técnica pra usar?",
    a: "Não. A gente cuida de toda a parte técnica — mapeamento, construção, integração, treinamento e ajustes. Você foca no seu negócio e a Zerek cuida da automação.",
  },
  {
    q: "Quanto custa uma automação?",
    a: "Depende do porte e do escopo. Trabalhamos com planos pensados pra PME caber no orçamento. Na conversa de diagnóstico a gente já te passa um valor claro, sem letras miúdas.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Pode. Sem fidelidade, sem multa. Acreditamos que você fica porque dá resultado — não porque está preso a um contrato.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-surface/20 border-y border-border">
      <div className="container-zerek max-w-3xl">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Perguntas frequentes
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 35}>
                <div
                  className="rounded-xl border transition-all duration-300"
                  style={{
                    borderColor: isOpen ? "oklch(0.62 0.2 260 / 0.4)" : "oklch(1 0 0 / 0.07)",
                    background: isOpen ? "oklch(0.62 0.2 260 / 0.05)" : "transparent",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-5 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold tabular-nums shrink-0 transition-colors duration-300"
                        style={{ color: isOpen ? "oklch(0.62 0.2 260)" : "oklch(0.5 0.02 265)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base sm:text-lg font-medium group-hover:text-primary-glow transition-colors duration-200">
                        {f.q}
                      </span>
                    </div>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? "oklch(0.62 0.2 260)" : undefined,
                      }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-400 ease-out"
                    style={{ maxHeight: isOpen ? 320 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="px-5 pb-5 pl-14 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────── */

function FloatingOrb({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={style}
      aria-hidden
    />
  );
}

export function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container-zerek max-w-3xl">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.18 0.04 265 / 0.95) 0%, oklch(0.14 0.03 265 / 0.98) 100%)",
              border: "1px solid oklch(0.62 0.2 260 / 0.25)",
              boxShadow: "0 0 80px oklch(0.62 0.2 260 / 0.18), inset 0 1px 0 oklch(1 0 0 / 0.05)",
            }}
          >
            {/* orbs */}
            <FloatingOrb
              className="h-64 w-64 -top-16 -left-16 animate-pulse"
              style={{ background: "radial-gradient(circle, oklch(0.62 0.2 260 / 0.20), transparent 70%)", animationDuration: "3s" }}
            />
            <FloatingOrb
              className="h-48 w-48 -bottom-12 -right-12 animate-pulse"
              style={{ background: "radial-gradient(circle, oklch(0.55 0.22 220 / 0.18), transparent 70%)", animationDelay: "1.5s", animationDuration: "3.5s" }}
            />

            {/* top shimmer */}
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.62 0.2 260 / 0.7) 40%, oklch(0.72 0.18 200 / 0.7) 60%, transparent)" }} />

            <div className="relative">
              {/* pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-medium text-slate-300">Comece hoje</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-[1.1]">
                Pronto para deixar a{" "}
                <span className="text-gradient">IA trabalhar</span>
                {" "}pra você?
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Fale com a gente no WhatsApp. Em poucos minutos te mostramos como a Zerek encaixa no seu negócio.
              </p>

              {/* botões */}
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    boxShadow: "0 0 30px rgba(34,197,94,0.35)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px rgba(34,197,94,0.55)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(34,197,94,0.35)")}
                >
                  <span className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                  <MessageCircle className="h-5 w-5 relative" />
                  <span className="relative">Falar no WhatsApp</span>
                  <ArrowRight className="h-4 w-4 relative transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="https://instagram.com/grupozerek"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-foreground hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>

              {/* trust */}
              <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {["Sem fidelidade", "Implementação em 7 dias", "Suporte humano"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.13_0.025_265)]">
      <div className="container-zerek py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/40 text-primary-glow text-sm font-bold">
              Z
            </span>
            <span className="text-base font-semibold tracking-tight">
              Zerek<span className="text-primary-glow">.ai</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Automação e soluções digitais com IA pra empresas que querem crescer sem aumentar a equipe.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              { href: "#solucoes", label: "Soluções" },
              { href: "#para-quem", label: "Para quem é" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-foreground hover:pl-1 transition-all duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contato</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@zerek.ai"
                className="hover:text-foreground transition-colors"
              >
                contato@zerek.ai
              </a>
            </li>
            <li>Joinville, SC — Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-zerek py-5 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 justify-between">
          <span>© 2026 Zerek.ai — Todos os direitos reservados</span>
          <span>Feito em Joinville · 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}
