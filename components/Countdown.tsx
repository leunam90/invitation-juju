"use client";
import { useEffect, useState } from "react";
import { fiesta } from "@/config/fiesta";

const start = new Date(fiesta.inicio).getTime();
const end = new Date(fiesta.fin).getTime();

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { días: Math.floor(s / 86400), horas: Math.floor((s % 86400) / 3600), min: Math.floor((s % 3600) / 60), seg: s % 60 };
}

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) return <div className="countdown" aria-hidden style={{ visibility: "hidden" }}>…</div>;
  if (now >= end) return <p className="cd-msg">¡Gracias por venir a mi fiesta! 💖</p>;
  if (now >= start) return <p className="cd-msg">¡La fiesta es ahorita! Corre a la piscina 💦</p>;

  const p = parts(start - now);
  return (
    <div className="countdown" role="timer" aria-live="off">
      {Object.entries(p).map(([label, v]) => (
        <div className="cd-cell" key={label}>
          <span className="cd-num">{String(v).padStart(2, "0")}</span>
          <span className="cd-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
