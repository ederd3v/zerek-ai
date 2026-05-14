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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/70 border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 lg:px-8 flex h-[72px] items-center justify-between gap-4">
        {/* Logo */}
        <a href="#top" className="flex flex-col leading-none shrink-0 group">
          <span className="text-[24px] font-black tracking-[-0.04em] text-foreground group-hover:text-primary-glow transition-colors duration-300">
            zerek<span className="text-primary">.ai</span>
          </span>
          <span className="inline-flex items-center gap-1.5 mt-1 text-[10px] text-primary-glow/80 tracking-[0.06em] font-medium">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary-glow opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
            </span>
            Soluções de automação com IA pra PMEs
          </span>
        </a>

        {/* Topics — centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center overflow-x-auto">
          {topics.map((t, i) => (
            <button
              key={`${t.label}-${i}`}
              onClick={() => scrollTo(t.id)}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`relative whitespace-nowrap px-4 py-2 text-[13px] transition-all duration-300 ${
                activeIdx === i
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground/70 font-normal hover:text-muted-foreground"
              }`}
            >
              {t.label}
              {activeIdx === i && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full bg-primary-glow shadow-[0_0_10px_oklch(0.74_0.16_255/0.8)]" />
              )}
            </button>
          ))}
        </div>

        {/* CTA + mobile button */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
          <button
            aria-label="Abrir menu"
            className="lg:hidden rounded-xl p-2.5 text-muted-foreground hover:text-foreground hover:bg-surface/80 transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-2xl">
          <div className="container-zerek flex flex-col py-5 gap-1 text-sm">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-muted-foreground hover:text-primary-glow py-3 border-b border-border/40 transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
