"use client";
import { fiesta } from "@/config/fiesta";

const toUtc = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export default function AddToCalendar() {
  const title = `Cumple ${fiesta.edad} de ${fiesta.nombre} 🎉`;
  const details = `${fiesta.recordatorio} Cómo llegar: ${fiesta.mapsUrl}`;
  const google =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${toUtc(fiesta.inicio)}/${toUtc(fiesta.fin)}` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(fiesta.lugarTexto)}`;

  const downloadIcs = () => {
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//invitacion//ES", "BEGIN:VEVENT",
      `UID:cumple-${fiesta.nombre}-${toUtc(fiesta.inicio)}@invitacion`,
      `DTSTAMP:${toUtc(new Date().toISOString())}`,
      `DTSTART:${toUtc(fiesta.inicio)}`, `DTEND:${toUtc(fiesta.fin)}`,
      `SUMMARY:${title}`, `DESCRIPTION:${details}`, `LOCATION:${fiesta.lugarTexto}`,
      "BEGIN:VALARM", "TRIGGER:-PT3H", "ACTION:DISPLAY", `DESCRIPTION:${title}`, "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: `cumple-${fiesta.nombre.toLowerCase()}.ics` });
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cal-btns">
      <a className="link-btn" href={google} target="_blank" rel="noopener noreferrer">Google Calendar</a>
      <button className="link-btn" onClick={downloadIcs}>iPhone / otro</button>
    </div>
  );
}
