import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fiesta } from "@/config/fiesta";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Cumple ${fiesta.edad} de ${fiesta.nombre}`,
  description: `${fiesta.fechaTexto} · ${fiesta.horaTexto} · ¡Habrá baño de piscina!`,
  // Que no aparezca en Google: solo entra quien tenga el link.
  robots: { index: false, follow: false },
  openGraph: {
    title: `¡Estás invitado al cumple de ${fiesta.nombre}! 🎉`,
    description: `${fiesta.fechaTexto} · ${fiesta.horaTexto}`,
    images: ["/invitacion.png"],
  },
};

export const viewport: Viewport = { themeColor: "#ff4fa3" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
