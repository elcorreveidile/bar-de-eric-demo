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
