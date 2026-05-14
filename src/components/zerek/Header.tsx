import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://api.whatsapp.com/send?phone=5547996904704&text=Oi%21+Acessei+o+site+da+Zerek.IA+e+desejo+algumas+informa%C3%A7%C3%B5es";

const topics = [
  { label: "Agentes de IA", id: "solucoes" },
  { label: "Automações", id: "solucoes" },
  { label: "Sites", id: "solucoes" },
  { label: "CRM", id: "solucoes" },
  { label: "Dashboards", id: "solucoes" },
];

const navLinks = [
  { id: "solucoes", label: "Soluções" },
  { id: "para-quem", label: "Para quem é" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 lg:px-8 flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex flex-col leading-none shrink-0">
          <span className="text-[22px] font-extrabold tracking-[-0.04em] text-foreground">
            zerek<span className="text-primary">.ai</span>
          </span>
          <span className="inline-flex items-center gap-1.5 mt-1 text-[10px] text-primary-glow tracking-[0.04em]">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary-glow opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
            </span>
            Soluções de automação com IA pra PMEs
          </span>
        </a>

        {/* Topics — centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center overflow-x-auto scrollbar-none">
          {topics.map((t, i) => (
            <button
              key={`${t.label}-${i}`}
              onClick={() => scrollTo(t.id)}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`whitespace-nowrap px-3.5 py-1.5 text-[13.5px] transition-colors border-b-2 ${
                activeIdx === i
                  ? "text-foreground border-primary font-medium"
                  : "text-muted-foreground/80 border-transparent font-normal"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* CTA + mobile button */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 0 16px rgba(37,211,102,0.35)",
            }}
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
          <button
            aria-label="Abrir menu"
            className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-surface"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-5 bg-current mb-1" />
            <span className="block h-0.5 w-5 bg-current mb-1" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-zerek flex flex-col py-4 gap-1 text-sm">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-muted-foreground hover:text-foreground py-2.5 border-b border-border/60"
              >
                {l.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
