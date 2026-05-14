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
} from "lucide-react";
import { useState, useRef } from "react";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B5es";

/* ---------- Soluções ---------- */

const solutions = [
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Atendimento, vendas e agendamento automatizados no WhatsApp, Instagram e site, 24 horas por dia.",
  },
  {
    icon: Zap,
    title: "Automação",
    desc: "Fluxos automáticos de captação, follow-up, pós-venda e reativação — rodando 24h sem intervenção manual.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    desc: "Painéis visuais em tempo real com métricas de vendas, atendimento e performance do seu negócio.",
  },
  {
    icon: LayoutDashboard,
    title: "CRM Sob Medida",
    desc: "Pipeline de vendas, gestão de clientes e histórico de interações — tudo integrado e automatizado pro seu time.",
  },
  {
    icon: Globe,
    title: "Sites que Convertem",
    desc: "Landing pages e sites institucionais rápidos, otimizados e conectados às suas automações e CRM.",
  },
  {
    icon: Workflow,
    title: "Integração de Sistemas",
    desc: "Conecta seu CRM, ERP, planilhas e ferramentas. Tudo conversando entre si, sem digitação manual.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-zerek relative">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow mb-4">
              Soluções
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight">
              Automação com <span className="text-gradient">IA</span>, do começo ao fim
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Cada parte da sua empresa rodando no automático, conectada e inteligente.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <TiltCard>
                <SolutionCard {...s} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

function SolutionCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="group card-shine relative block rounded-2xl border border-border/60 bg-surface/70 backdrop-blur-xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_0_1px_oklch(0.62_0.2_260/0.5),0_20px_60px_oklch(0.62_0.2_260/0.2)] hover:-translate-y-1"
    >
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30 text-primary-glow group-hover:ring-primary/60 transition-all duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary-glow transition-colors duration-300">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{desc}</p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-glow">
        Saiba mais
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </a>
  );
}

/* ---------- Para quem é ---------- */

const audiences = [
  { icon: Stethoscope, label: "Clínicas e Consultórios" },
  { icon: Building2, label: "Imobiliárias" },
  { icon: Wrench, label: "Mecânicas e Oficinas" },
  { icon: Scissors, label: "Salões e Estética" },
  { icon: ShoppingBag, label: "Varejo e E-commerce" },
  { icon: Briefcase, label: "Prestadores de Serviço" },
];

export function AudienceSection() {
  return (
    <section id="para-quem" className="relative py-28 sm:py-36 glass-strong border-y border-border/50">
      <div className="container-zerek">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow mb-4">
              Para quem é
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight">
              Automação para empresas que querem escalar
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Atendemos qualquer negócio que tenha processos repetitivos e queira ganhar tempo, vender mais e atender melhor.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
          {audiences.map((a, i) => (
            <Reveal key={a.label} delay={i * 80}>
              <div className="group flex items-center gap-4 rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/50 hover:bg-surface/80 hover:shadow-[0_0_30px_oklch(0.62_0.2_260/0.12)] cursor-default">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-primary-glow ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 group-hover:scale-110">
                  <a.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-sm sm:text-base font-medium group-hover:text-foreground transition-colors">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-muted-foreground text-center text-sm">
            A Zerek.ai se adapta ao seu negócio, não o contrário.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Como funciona ---------- */

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos os processos da sua empresa e identificamos onde a automação gera mais resultado.",
  },
  {
    n: "02",
    title: "Implementação",
    desc: "Construímos as automações sob medida e colocamos pra rodar em até 7 dias.",
  },
  {
    n: "03",
    title: "Otimização contínua",
    desc: "Monitoramos os números e ajustamos pra melhorar performance toda semana.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container-zerek">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow mb-4">
              Como funciona
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight">
              Do diagnóstico ao resultado em semanas
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[2px]" aria-hidden>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 150}>
              <div className="relative text-center md:text-left group">
                <div className="relative mx-auto md:mx-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-gradient-to-br from-surface to-background text-lg font-bold text-primary-glow shadow-[0_0_40px_oklch(0.62_0.2_260/0.3)] group-hover:shadow-[0_0_60px_oklch(0.62_0.2_260/0.5)] transition-shadow duration-500">
                  {s.n}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-md -z-10 group-hover:bg-primary/20 transition-colors" />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight group-hover:text-primary-glow transition-colors">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

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
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="container-zerek max-w-3xl">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight">
              Perguntas frequentes
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? "text-primary-glow" : "group-hover:text-primary-glow"}`}>
                      {f.q}
                    </span>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-primary/50 bg-primary/10 rotate-180" : "border-border/60 group-hover:border-primary/40"}`}>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-6 pr-12 text-muted-foreground leading-relaxed text-[15px]">{f.a}</p>
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

/* ---------- Final CTA ---------- */

export function FinalCta() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container-zerek relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-primary/20 via-surface to-background p-12 sm:p-20 text-center">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[50rem] rounded-full bg-primary/40 blur-[140px] opacity-60 animate-pulse" aria-hidden />
            <div className="absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-primary-glow/20 blur-[100px]" aria-hidden />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.05]">
                Pronto pra sua empresa{" "}
                <span className="text-gradient">rodar no automático?</span>
              </h2>
              <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Agende um diagnóstico gratuito de 30 minutos. Mostramos onde a automação vai gerar mais resultado pra você.
              </p>
              <div className="mt-12 flex justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-lg font-bold text-primary-foreground shadow-[0_0_60px_oklch(0.62_0.2_260/0.6)] hover:shadow-[0_0_80px_oklch(0.62_0.2_260/0.8)] hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Agendar diagnóstico
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Resposta em até 1 hora útil</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[oklch(0.12_0.02_265)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container-zerek py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 ring-1 ring-primary/40 text-primary-glow text-sm font-bold">
              Z
            </span>
            <span className="text-lg font-bold tracking-tight">
              Zerek<span className="text-primary-glow">.ai</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Automação e soluções digitais com IA pra empresas que querem crescer sem limites.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-5 text-foreground">Navegação</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#solucoes" className="hover:text-primary-glow transition-colors duration-200">Soluções</a></li>
            <li><a href="#para-quem" className="hover:text-primary-glow transition-colors duration-200">Para quem é</a></li>
            <li><a href="#como-funciona" className="hover:text-primary-glow transition-colors duration-200">Como funciona</a></li>
            <li><a href="#faq" className="hover:text-primary-glow transition-colors duration-200">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-5 text-foreground">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary-glow transition-colors duration-200">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contato@zerek.ai" className="hover:text-primary-glow transition-colors duration-200">
                contato@zerek.ai
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow/60" />
              Joinville, SC — Brasil
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-zerek py-7 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 justify-between items-center">
          <span>© 2026 Zerek.ai — Todos os direitos reservados</span>
          <span>Feito em Joinville 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}
