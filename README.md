# Invitación del cumple de Julieta 🎉

Minisitio en Next.js: sobre que se abre con confeti, cuenta regresiva, agregar al calendario, cómo llegar y confirmación por WhatsApp.

## 1. Personaliza
Edita `config/fiesta.ts`:
- `mapsUrl`: link de Google Maps de la casa de los abuelitos.
- `whatsapp`: número que recibe confirmaciones (ej. `5219991234567`).
- Fechas/horas si cambian. La imagen está en `public/invitacion.png`.

## 2. Pruébalo en tu compu
```bash
npm install
npm run dev
```
Abre http://localhost:3000

## 3. Despliega en Vercel
**Opción A (CLI, la más rápida):**
```bash
npm i -g vercel
vercel        # primera vez: te pide login y crea el proyecto
vercel --prod
```
**Opción B (GitHub):** sube la carpeta a un repo → en vercel.com "Add New Project" → importa el repo → Deploy. Vercel detecta Next.js solo.

Tip: en Vercel → Settings → Domains puedes cambiar el subdominio a algo como `cumple-julieta.vercel.app`.

El sitio tiene `noindex` para que no salga en buscadores; solo entra quien tenga el link.
