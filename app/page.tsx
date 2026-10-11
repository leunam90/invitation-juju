import { fiesta } from "@/config/fiesta";
import Envelope from "@/components/Envelope";
import Countdown from "@/components/Countdown";
import AddToCalendar from "@/components/AddToCalendar";
import Rsvp from "@/components/Rsvp";

export default function Page() {
  return (
    <main>
      <Bubbles />
      <section className="hero">
        <Envelope />
      </section>

      <section className="panel countdown-panel">
        <h2>Faltan</h2>
        <Countdown />
      </section>

      <section className="panel details">
        <div className="detail">
          <span className="detail-icon" aria-hidden>📅</span>
          <div>
            <p className="detail-main">{fiesta.fechaTexto}</p>
            <AddToCalendar />
          </div>
        </div>
        <div className="detail">
          <span className="detail-icon" aria-hidden>⏰</span>
          <p className="detail-main">{fiesta.horaTexto}</p>
        </div>
        <div className="detail">
          <span className="detail-icon" aria-hidden>📍</span>
          <div>
            <p className="detail-main">{fiesta.lugarTexto}</p>
            <a className="link-btn" href={fiesta.mapsUrl} target="_blank" rel="noopener noreferrer">
              Ver cómo llegar
            </a>
          </div>
        </div>
        <div className="pool-note">
          <span aria-hidden>🩱</span> {fiesta.recordatorio}
        </div>
      </section>

      <section className="panel">
        <h2>¿Vienes?</h2>
        <Rsvp />
      </section>

      <footer>
        <svg className="waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z" fill="var(--aqua)" opacity=".55" />
          <path d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z" fill="var(--aqua)" />
        </svg>
        <p>¡Te espero para echarnos a la piscina! 💦</p>
      </footer>
    </main>
  );
}

function Bubbles() {
  const items = ["💖", "⭐", "🫧", "💗", "⭐", "🫧", "💕", "✨"];
  return (
    <div className="bubbles" aria-hidden>
      {items.map((e, i) => (
        <span key={i} style={{ left: `${(i * 13 + 5) % 95}%`, animationDelay: `${i * 1.7}s`, animationDuration: `${14 + (i % 4) * 3}s` }}>
          {e}
        </span>
      ))}
    </div>
  );
}
