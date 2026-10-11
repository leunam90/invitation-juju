"use client";
import { useState } from "react";
import Image from "next/image";
import { fiesta } from "@/config/fiesta";
import { celebrate } from "./celebrate";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    celebrate();
  };

  return (
    <div className={`envelope-wrap ${open ? "is-open" : ""}`}>
      {!open && (
        <button className="envelope" onClick={handleOpen} aria-label="Abrir la invitación">
          <span className="flap" aria-hidden />
          <span className="seal" aria-hidden>💌</span>
          <span className="envelope-text">
            Tienes una invitación
            <small>de {fiesta.nombre} · toca para abrir</small>
          </span>
        </button>
      )}
      {open && (
        <div className="card">
          <Image
            src="/invitacion.png"
            alt={`Invitación al cumpleaños ${fiesta.edad} de ${fiesta.nombre}: ${fiesta.fechaTexto}, ${fiesta.horaTexto}, ${fiesta.lugarTexto}. ¡Habrá baño de piscina!`}
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 520px) 92vw, 460px"
          />
          <button className="again" onClick={celebrate}>¡Más confeti! 🎉</button>
        </div>
      )}
    </div>
  );
}
