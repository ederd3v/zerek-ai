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
import { useState } from "react";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://wa.me/5547999942227";

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
    <section id="solucoes" className="relative py-28 sm:py-36">
      <div className="container-zerek">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              Soluções
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Soluções de automação com <span className="text-primary-glow">IA</span>, do começo ao fim
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Cada parte da sua empresa rodando no automático, conectada e inteligente.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <SolutionCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_oklch(0.62_0.2_260/0.6),0_8px_40px_oklch(0.62_0.2_260/0.18)]"
    >
      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 text-primary-glow group-hover:bg-primary/20 transition-colors">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow">
        Saiba mais
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <section id="para-quem" className="relative py-28 sm:py-36 bg-surface/40 border-y border-border">
      <div className="container-zerek">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              Para quem é
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Automação para empresas que querem escalar
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Atendemos qualquer negócio que tenha processos repetitivos e queira ganhar tempo,
              vender mais e atender melhor.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
          {audiences.map((a, i) => (
            <Reveal key={a.label} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background/60 p-5 transition-all duration-300 hover:border-primary/50 hover:bg-surface">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-glow ring-1 ring-primary/20">
                  <a.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <span className="text-sm sm:text-base font-medium">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-muted-foreground text-center">
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
    <section id="como-funciona" className="relative py-28 sm:py-36">
      <div className="container-zerek">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              Como funciona
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Do diagnóstico ao resultado em semanas
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* connecting line */}
          <div
            className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            aria-hidden
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-semibold text-primary-glow shadow-[0_0_30px_oklch(0.62_0.2_260/0.25)]">
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-glow mb-4">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Perguntas frequentes
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium group-hover:text-primary-glow transition-colors">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary-glow" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
                  style={{
                    maxHeight: isOpen ? 320 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-6 pr-10 text-muted-foreground leading-relaxed">{f.a}</p>
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
    <section className="relative py-28 sm:py-36">
      <div className="container-zerek">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-surface to-background p-10 sm:p-16 text-center">
            {/* glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/30 blur-[120px] opacity-70" aria-hidden />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.05]">
                Pronto pra sua empresa{" "}
                <span className="text-gradient">rodar no automático?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Agende um diagnóstico gratuito de 30 minutos. Mostramos onde a automação vai gerar
                mais resultado pra você.
              </p>
              <div className="mt-10 flex justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_0_50px_oklch(0.62_0.2_260/0.6)] hover:shadow-[0_0_70px_oklch(0.62_0.2_260/0.8)] hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar diagnóstico
                </a>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">Resposta em até 1 hora útil</p>
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
    <footer className="border-t border-border bg-[oklch(0.13_0.025_265)]">
      <div className="container-zerek py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40 text-primary-glow text-sm font-bold">
              Z
            </span>
            <span className="text-base font-semibold tracking-tight">
              Zerek<span className="text-primary-glow">.ai</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Automação e soluções digitais com IA pra empresas que querem crescer.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a></li>
            <li><a href="#para-quem" className="hover:text-foreground transition-colors">Para quem é</a></li>
            <li><a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contato</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contato@zerek.ai" className="hover:text-foreground transition-colors">
                contato@zerek.ai
              </a>
            </li>
            <li>Joinville, SC — Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-zerek py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 justify-between">
          <span>© 2026 Zerek.ai — Todos os direitos reservados</span>
          <span>Feito em Joinville · 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}
