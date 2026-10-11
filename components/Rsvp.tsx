"use client";
import { useState } from "react";
import { fiesta } from "@/config/fiesta";
import { celebrate } from "./celebrate";

export default function Rsvp() {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState(1);
  const [voy, setVoy] = useState<boolean | null>(null);
  const [error, setError] = useState("");

  const enviar = () => {
    if (!nombre.trim()) return setError("Escribe tu nombre para que sepamos quién eres.");
    if (voy === null) return setError("Elige si vas a venir o no.");
    setError("");
    const msg = voy
      ? `¡Hola! Soy ${nombre.trim()} y SÍ voy al cumple de ${fiesta.nombre} 🎉 Vamos ${personas} persona${personas > 1 ? "s" : ""}.`
      : `¡Hola! Soy ${nombre.trim()}. Qué lástima, no podré ir al cumple de ${fiesta.nombre} 💖 ¡Que se la pase increíble!`;
    if (voy) celebrate();
    window.open(`https://wa.me/${fiesta.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <div className="rsvp">
      <label className="field">
        <span>Tu nombre</span>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Sofía y su mamá" autoComplete="name" />
      </label>

      <div className="choice" role="radiogroup" aria-label="¿Vas a venir?">
        <button role="radio" aria-checked={voy === true} className={voy === true ? "on yes" : ""} onClick={() => setVoy(true)}>¡Sí voy! 💦</button>
        <button role="radio" aria-checked={voy === false} className={voy === false ? "on no" : ""} onClick={() => setVoy(false)}>No podré 🥲</button>
      </div>

      {voy && (
        <div className="stepper">
          <span>¿Cuántos vienen?</span>
          <button onClick={() => setPersonas((n) => Math.max(1, n - 1))} aria-label="Menos personas">−</button>
          <output aria-live="polite">{personas}</output>
          <button onClick={() => setPersonas((n) => Math.min(10, n + 1))} aria-label="Más personas">+</button>
        </div>
      )}

      {error && <p className="error" role="alert">{error}</p>}
      <button className="send" onClick={enviar}>Confirmar por WhatsApp</button>
    </div>
  );
}
