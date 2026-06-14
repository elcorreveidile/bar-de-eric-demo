# El Bar de Eric

> Donde la música se hace tapa.

Aplicación web del **Bar de Eric** — bar museo del rock, tapas musicales y eventos en Granada. Fundado por **Eric Jiménez** (batería de Los Planetas, Lagartija Nick y Los Evangelistas).

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Drizzle ORM** + **Neon** (PostgreSQL)
- **Auth.js** (Magic Link) + **Resend** (emails)
- Deploy en **Vercel**

## Funcionalidades

- **Home** — Landing con secciones de museo, menú, eventos y bio de Eric
- **Museo Digital** — Galería de fotos con filtros + timeline musical (1982–2024)
- **Menú** — Tapas con nombres de canciones e historia musical
- **Programación** — Calendario de conciertos, exposiciones y talleres
- **Guía Rockera** — Rutas musicales por Granada
- **Reservas** — Reserva de mesa con confirmación por email
- **Pedidos para llevar** — Carrito y checkout con número de referencia
- **Dashboard Admin** — CRUD de menú, galería, eventos, mesas, reservas y pedidos (protegido)

## Imágenes

⚠️ **Todas las imágenes son _placeholders_ temporales** (SVG generados con la identidad visual de la marca) que se reemplazarán por las **fotos reales de Eric / del bar** en preproducción. Ver:

- `public/images/README.md` — aviso y guía de reemplazo
- `docs/IMAGENES_PROMPTS.md` — prompts de IA + inventario + fuentes reales
- `scripts/generate-placeholders.mjs` — generador (`node scripts/generate-placeholders.mjs`)

## Estado del proyecto

✅ Build de producción correcto (33 rutas) · ✅ Lint limpio · ✅ Migración Drizzle generada · ✅ Deploy de preview en Vercel.

> Las rutas API devuelven datos _mock_ hasta conectar un `DATABASE_URL` real de Neon. El Magic Link de Auth.js queda como _scaffold_ pendiente de credenciales. Las imágenes son placeholders.

### Checklist de paso a producción

- [ ] Configurar variables de entorno reales en Vercel (`DATABASE_URL`, `AUTH_SECRET`, `RESEND_API_KEY`, `ADMIN_EMAIL`, `CRON_SECRET`).
- [ ] `npm run db:push` + `npm run db:seed` sobre la base de datos Neon de producción.
- [ ] Sustituir las rutas API _mock_ por queries Drizzle reales (`lib/db/queries`).
- [ ] Completar el flujo de Auth.js Magic Link (envío real vía Resend + verificación en DB).
- [ ] Reemplazar las imágenes placeholder por las fotos reales de Eric (con su permiso).
- [ ] Verificar dominios: `bar-de-eric-demo.vercel.app` → producción `elbardeeric.por2duros.com` (tras aprobación de Eric).
- [ ] Revisión final de SEO/Lighthouse y accesibilidad.

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # rellena DATABASE_URL, AUTH_SECRET, RESEND_API_KEY, ADMIN_EMAIL
npm run db:generate          # genera migraciones
npm run db:push              # aplica el esquema a Neon
npm run db:seed              # carga datos de ejemplo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | ESLint |
| `npm run db:generate` | Genera migraciones Drizzle |
| `npm run db:push` | Sincroniza el esquema con la base de datos |
| `npm run db:seed` | Inserta datos de ejemplo |
| `npm run db:studio` | Drizzle Studio |

## Variables de entorno

```
DATABASE_URL=postgresql://...        # Neon connection string
AUTH_SECRET=...                      # secreto de Auth.js
RESEND_API_KEY=re_...                # API key de Resend
ADMIN_EMAIL=eric@elbardeeric.com     # email autorizado para el dashboard
NEXTAUTH_URL=http://localhost:3000
CRON_SECRET=...                      # opcional, protege el endpoint de cron
```

## El negocio

- **Ubicación:** Calle Escuelas 8, Centro, 18001 Granada
- **Teléfono:** +34 958 276 301
- **Horarios:** L–S 09:00–02:00, domingo variable
- **Abierto desde:** marzo de 2013
