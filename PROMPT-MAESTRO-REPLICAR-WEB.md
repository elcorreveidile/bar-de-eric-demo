# Prompt Maestro — Replicar arquitectura "El Bar de Eric"

> Copia este prompt completo y pégalo en una nueva sesión de Claude Code (Codex) para que genere un proyecto con la misma arquitectura, cambiando solo los contenidos.

---

## PROMPT

```
Eres un desarrollador senior fullstack. Tu tarea es crear una web profesional completa desde cero para el siguiente negocio:

[DESCRIBE AQUÍ EL NEGOCIO: nombre, sector, ubicación, qué ofrece, público objetivo]

La web debe replicar EXACTAMENTE la arquitectura técnica y estructura que te describo abajo. Solo cambian los contenidos, textos, colores y productos — la base técnica es idéntica.

---

## STACK TÉCNICO (obligatorio, no cambiar)

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript estricto
- **CSS:** Tailwind CSS v4 (configuración vía `@theme inline` en globals.css, NO tailwind.config.js)
- **Base de datos:** Drizzle ORM + Neon PostgreSQL (serverless HTTP)
- **Autenticación:** Magic link por email (Next-Auth 5 beta + Resend)
- **Pagos:** Stripe Checkout (redirect mode)
- **Email:** Resend (con dominio personalizado: noreply@espanias.com)
- **Almacenamiento de imágenes:** Vercel Blob (@vercel/blob)
- **Validación:** Zod v4
- **Despliegue:** Vercel
- **Mapas (opcional):** Leaflet + react-leaflet (dynamic import, sin SSR)

---

## ESTRUCTURA DE CARPETAS (replicar exacta)

```
app/
├── (public)/              ← Grupo de rutas públicas (sin layout extra)
│   ├── [secciones]/       ← Una carpeta por sección pública
│   │   ├── page.tsx       ← Listado
│   │   └── [slug]/page.tsx ← Detalle
│   └── tienda/
│       ├── page.tsx       ← Grid de productos
│       ├── carrito/page.tsx ← Página del carrito
│       ├── checkout/page.tsx ← Flujo de pago
│       └── confirmacion/page.tsx ← Post-compra
├── api/
│   ├── admin/             ← CRUD protegido para cada entidad
│   │   ├── [entidad]/route.ts  ← GET/POST/PATCH/DELETE
│   │   ├── upload/route.ts     ← Subida a Vercel Blob
│   │   └── seed/route.ts       ← Datos iniciales
│   ├── auth/
│   │   ├── signin/route.ts     ← Envía magic link
│   │   ├── signout/route.ts    ← Cierra sesión
│   │   └── verify/route.ts     ← Verifica token
│   ├── checkout/route.ts       ← Crea sesión Stripe
│   ├── tienda/
│   │   ├── verify-email/route.ts  ← Verificación email pre-checkout
│   │   └── verify-token/route.ts  ← Valida token del email
│   └── reservas/route.ts       ← Reservas públicas
├── auth/
│   ├── signin/page.tsx    ← Página login
│   └── verify/page.tsx    ← Verificación token
├── dashboard/
│   ├── layout.tsx         ← Layout protegido con sidebar
│   ├── page.tsx           ← Home admin
│   └── [entidad]/page.tsx ← Admin por entidad
├── globals.css            ← Tailwind v4 + @theme inline
├── layout.tsx             ← Root layout (CarritoProvider + Navbar + Footer)
└── page.tsx               ← Home pública

components/
├── dashboard/             ← Componentes admin (tablas, formularios, uploads)
├── home/                  ← Secciones de la home
├── shared/                ← Navbar, Footer, AlertBox, LoadingSpinner
├── tienda/                ← TiendaGrid, ProductoCard, CarritoTienda, CheckoutFlow
└── [seccion]/             ← Componentes específicos por sección

context/
└── CarritoContext.tsx     ← Estado global del carrito (localStorage + useRef guard)

lib/
├── db/
│   ├── client.ts          ← Drizzle + Neon HTTP (lazy singleton)
│   ├── schema.ts          ← Tablas Drizzle (pgTable)
│   ├── queries/index.ts   ← Queries SELECT reutilizables
│   └── seed.ts            ← Script de seed
├── email.ts               ← Templates Resend
├── productos-tienda.ts    ← Catálogo de productos (estático)
├── stripe.ts              ← Cliente Stripe singleton
├── utils.ts               ← Helpers (formatPrice, cn, slugify)
└── validators.ts          ← Schemas Zod

middleware.ts              ← Protección /dashboard (cookie check + redirect)
```

---

## PATRÓN DEL CARRITO (crítico, copiar exacto)

```typescript
"use client";
// context/CarritoContext.tsx

// 1. Map<string, number> para items (id → cantidad)
// 2. localStorage key: "carrito-tienda"
// 3. useRef(true) como guard para evitar race condition:
//    - skipWrite = useRef(true)
//    - Primer useEffect: lee localStorage, setItems, skipWrite.current = false
//    - Segundo useEffect: si skipWrite es true, return. Si no, escribe a localStorage
// 4. Estado "mounted" para evitar flash de "carrito vacío" en SSR
// 5. Métodos: agregar(id), quitar(id), vaciar(), totalItems
// 6. Provider envuelve toda la app en layout.tsx
```

---

## FLUJO DE AUTENTICACIÓN (magic link)

1. POST /api/auth/signin → genera token UUID + expiresAt (15 min) → guarda en tabla `magicTokens` → envía email con Resend
2. Email contiene enlace: /auth/verify?token={uuid}
3. GET /auth/verify → POST /api/auth/verify → valida token + crea cookie de sesión
4. middleware.ts protege /dashboard/* comprobando cookie

---

## FLUJO DE PAGO (Stripe)

1. Carrito persistido en localStorage (CarritoContext)
2. /tienda/checkout → pide email → POST /api/tienda/verify-email → envía magic link
3. Usuario vuelve con token → POST /api/tienda/verify-token → valida
4. Submit datos → POST /api/checkout → crea Stripe session → redirect a Stripe
5. Stripe success → redirect a /tienda/confirmacion → vaciar() carrito
6. IMPORTANTE: NO vaciar carrito antes de redirect a Stripe (si vuelve atrás, mantiene items)

---

## BASE DE DATOS (esquema base, adaptar nombres)

Tablas mínimas obligatorias:
- `users` (id uuid, email unique, role, createdAt)
- `magicTokens` (id uuid, email, token unique, expiresAt, createdAt)
- `[entidad_principal]` (contenido principal del negocio)
- `[entidad_galería]` (fotos con Vercel Blob URLs)
- `[entidad_eventos]` (programación/calendario)
- `reservas` (nombre, email, telefono, fecha, hora, estado)
- `pedidos` (referencia, cliente, total en céntimos, estado)
- `pedidoItems` (junction: pedidoId + productoId + cantidad + precioUnitario)

Precios SIEMPRE en céntimos (integer). Formatear al mostrar con Intl.NumberFormat.

---

## TAILWIND v4 (globals.css)

```css
@import "tailwindcss";

@theme inline {
  --color-[nombre-1]: #hex;      /* Fondo principal (oscuro) */
  --color-[nombre-2]: #hex;      /* Fondo cards */
  --color-[nombre-accent]: #hex; /* Color primario/acento */
  --color-[nombre-secondary]: #hex;
  --color-[gris]: #374151;
  --color-[gris-light]: #9CA3AF;
  --font-display: "[Fuente Display]", serif;
  --font-body: "[Fuente Body]", sans-serif;
}

body {
  background-color: var(--color-[fondo]);
  color: #ededed;
  font-family: var(--font-body);
}
```

---

## NAVBAR (patrón)

- Logo a la izquierda (img)
- Links de navegación centrados/derecha (desktop)
- Icono carrito SIEMPRE visible (shopping bag SVG) con badge de totalItems
- Hamburguesa en mobile → overlay fullscreen con links + "Ver carrito"
- Sticky top-0 con backdrop-blur

---

## IMÁGENES

- Usar placeholders SVG generados (scripts/generate-placeholders.mjs)
- Estructura: public/images/[categoria]/placeholder-[nombre].svg
- Para uploads admin: Vercel Blob (POST /api/admin/upload con formData)
- NUNCA hardcodear URLs de imágenes reales sin permiso del cliente

---

## VARIABLES DE ENTORNO (.env.example)

```bash
DATABASE_URL=postgresql://...
AUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
RESEND_API_KEY=re_...
ADMIN_EMAIL=admin@...
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
NEXT_PUBLIC_BASE_URL=https://...
BLOB_READ_WRITE_TOKEN=vercel_blob_...
CRON_SECRET=...
```

---

## INSTRUCCIONES DE EJECUCIÓN

1. Crea el proyecto completo con `npx create-next-app@latest`
2. Instala dependencias: drizzle-orm, @neondatabase/serverless, @vercel/blob, stripe, resend, zod, next-auth@beta, leaflet, react-leaflet
3. DevDeps: drizzle-kit, @tailwindcss/postcss, tailwindcss, tsx, sharp
4. Configura Tailwind v4 (postcss.config.mjs con @tailwindcss/postcss)
5. Crea el schema de DB y ejecuta db:push
6. Implementa las rutas API en orden: auth → admin CRUD → checkout
7. Crea las páginas públicas
8. Crea el dashboard admin
9. Conecta Stripe y Resend
10. Genera placeholders para imágenes
11. Despliega en Vercel

---

## REGLAS DE CÓDIGO

- Server Components por defecto. "use client" SOLO cuando haya interactividad (useState, useEffect, event handlers)
- NO crear archivos de documentación innecesarios
- NO añadir comentarios salvo cuando el "por qué" no sea obvio
- Precios en céntimos, formatear con Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" })
- Slugs generados con función slugify propia
- Error handling mínimo: solo validar en fronteras del sistema (inputs de usuario, APIs externas)
- Las queries de DB van centralizadas en lib/db/queries/index.ts

---

## RESULTADO ESPERADO

Una web completa, desplegable en Vercel, con:
- ✅ Home atractiva con hero + secciones destacadas
- ✅ Mínimo 4-5 secciones públicas con listado + detalle
- ✅ Tienda con carrito persistente + Stripe
- ✅ Panel admin protegido con CRUD completo + upload de imágenes
- ✅ Reservas con formulario + confirmación email
- ✅ Autenticación por magic link
- ✅ Base de datos PostgreSQL (Neon)
- ✅ Diseño responsive (mobile-first)
- ✅ SEO básico (meta tags, Open Graph)
- ✅ Todas las imágenes como placeholders reemplazables

Empieza implementando. No preguntes, actúa.
```

---

## CÓMO USAR ESTE PROMPT

1. Abre una nueva sesión de Claude Code
2. Crea un repositorio vacío en GitHub
3. Pega el prompt de arriba
4. Antes del bloque de prompt, añade una descripción del negocio específico:
   - Nombre del negocio
   - Sector/tipo (restaurante, clínica, tienda, estudio...)
   - Secciones que necesita (equivalentes a museo/menú/programación/etc.)
   - Productos de la tienda
   - Colores de marca
   - Tipografías deseadas

El agente generará un proyecto idéntico en estructura pero con contenidos adaptados al nuevo cliente.
