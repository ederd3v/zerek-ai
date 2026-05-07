import { useEffect, useState } from "react";
import { Check, CheckCheck } from "lucide-react";

type Msg = {
  from: "client" | "agent";
  text: string;
  delay: number;
};

const SCRIPT: Msg[] = [
  { from: "client", text: "Oi! Vocês atendem hoje?", delay: 600 },
  { from: "agent", text: "Olá 👋 Sim, atendemos! Posso já agendar pra você. Qual horário prefere?", delay: 1800 },
  { from: "client", text: "Tem às 15h?", delay: 1500 },
  { from: "agent", text: "Tenho sim! Confirmo agora pro seu nome?", delay: 1700 },
  { from: "client", text: "Pode confirmar 🙌", delay: 1200 },
  { from: "agent", text: "Pronto! Agendado às 15h. Te mando o lembrete 1h antes ✅", delay: 1900 },
];

export function ChatMockup() {
  const [shown, setShown] = useState<number>(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let acc = 400;

    const run = () => {
      setShown(0);
      SCRIPT.forEach((m, i) => {
        // typing indicator only for agent
        if (m.from === "agent") {
          timeouts.push(
            setTimeout(() => setTyping(true), acc - 600),
          );
        }
        timeouts.push(
          setTimeout(() => {
            setTyping(false);
            setShown(i + 1);
          }, acc),
        );
        acc += m.delay;
      });
      // restart loop
      timeouts.push(setTimeout(run, acc + 3500));
    };

    run();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* glow */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[2rem] opacity-60" aria-hidden />

      <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_oklch(0.16_0.03_265/0.8)] overflow-hidden">
        {/* top bar */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-xs font-bold text-primary-foreground">
            Z
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Atendimento Zerek</div>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              online · respondendo
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            WhatsApp
          </div>
        </div>

        {/* chat area */}
        <div className="px-4 py-5 space-y-2.5 min-h-[360px] max-h-[420px] overflow-hidden bg-[radial-gradient(ellipse_at_top,_oklch(0.62_0.2_260/0.08),_transparent_60%)]">
          {SCRIPT.slice(0, shown).map((m, i) => (
            <Bubble key={i} msg={m} />
          ))}
          {typing && <TypingBubble />}
        </div>
      </div>
    </div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isAgent = msg.from === "agent";
  return (
    <div
      className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
      style={{ animation: "message-in 280ms ease-out both" }}
    >
      <div
        className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed border ${
          isAgent
            ? "bg-surface border-border text-foreground rounded-bl-sm"
            : "bg-primary/15 border-primary/30 text-foreground rounded-br-sm"
        }`}
      >
        <p>{msg.text}</p>
        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
          <span>agora</span>
          {!isAgent ? <CheckCheck className="h-3 w-3 text-primary-glow" /> : <Check className="h-3 w-3" />}
        </div>
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start" style={{ animation: "message-in 200ms ease-out both" }}>
      <div className="rounded-2xl rounded-bl-sm border border-border bg-surface px-4 py-3 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
            style={{ animation: `typing-dot 1.2s ${i * 0.15}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}
