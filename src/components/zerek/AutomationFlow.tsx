import { MessageCircle, Mail, Calendar, Sheet, Bot, Zap, Database, Bell } from "lucide-react";
import { useEffect, useState } from "react";

type Node = {
  id: string;
  x: number; // %
  y: number; // %
  icon: any;
  label: string;
  delay: number;
};

const nodes: Node[] = [
  { id: "wpp", x: 8, y: 18, icon: MessageCircle, label: "WhatsApp", delay: 0 },
  { id: "mail", x: 8, y: 78, icon: Mail, label: "E-mail", delay: 200 },
  { id: "ai", x: 46, y: 48, icon: Bot, label: "Agente IA", delay: 400 },
  { id: "cal", x: 84, y: 14, icon: Calendar, label: "Agenda", delay: 700 },
  { id: "crm", x: 88, y: 50, icon: Database, label: "CRM", delay: 850 },
  { id: "sheet", x: 84, y: 84, icon: Sheet, label: "Planilha", delay: 1000 },
];

// edges: source id -> target id
const edges: Array<[string, string, number]> = [
  ["wpp", "ai", 100],
  ["mail", "ai", 300],
  ["ai", "cal", 600],
  ["ai", "crm", 750],
  ["ai", "sheet", 900],
];

export function AutomationFlow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl border border-border bg-gradient-to-br from-surface/80 via-background to-surface/40 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_oklch(0.62_0.2_260/0.18)]">
      {/* grid bg */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-primary/20 blur-[80px]" />

      {/* SVG edges */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.62 0.2 260)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.72 0.18 250)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.62 0.2 260)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {edges.map(([from, to, delay], i) => {
          const a = byId[from];
          const b = byId[to];
          // curved path
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2 - 4;
          const d = `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
          return (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="oklch(0.62 0.2 260 / 0.25)"
                strokeWidth="0.3"
                vectorEffect="non-scaling-stroke"
              />
              {mounted && (
                <circle r="0.9" fill="oklch(0.85 0.15 250)">
                  <animateMotion
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin={`${delay}ms`}
                    path={d}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="2.4s"
                    repeatCount="indefinite"
                    begin={`${delay}ms`}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((n) => {
        const Icon = n.icon;
        const isCenter = n.id === "ai";
        return (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              transition: "opacity 600ms ease-out, transform 600ms ease-out",
              transitionDelay: `${n.delay}ms`,
              opacity: mounted ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${mounted ? 1 : 0.8})`,
            }}
          >
            <div
              className={`flex items-center gap-2 rounded-xl border bg-background/90 backdrop-blur px-3 py-2 shadow-lg ${
                isCenter
                  ? "border-primary/60 shadow-[0_0_30px_oklch(0.62_0.2_260/0.5)]"
                  : "border-border"
              }`}
            >
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 ${
                  isCenter
                    ? "bg-primary/20 ring-primary/50 text-primary-glow"
                    : "bg-primary/10 ring-primary/25 text-primary-glow"
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
              <span className="text-[11px] sm:text-xs font-medium whitespace-nowrap pr-1">
                {n.label}
              </span>
            </div>
            {isCenter && (
              <span className="absolute -top-2 -right-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-primary-foreground shadow-[0_0_12px_oklch(0.62_0.2_260/0.8)]">
                <Zap className="h-2.5 w-2.5" />
              </span>
            )}
          </div>
        );
      })}

      {/* status pill */}
      <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] sm:text-xs text-muted-foreground">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Fluxo ativo · automações rodando
      </div>
      <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] text-muted-foreground">
        <Bell className="h-3 w-3 text-primary-glow" />
        24/7
      </div>
    </div>
  );
}
