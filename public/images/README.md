# ⚠️ Imágenes PLACEHOLDER — pendientes de reemplazar

**TODAS las imágenes de esta carpeta (y en general las de toda la web) son _placeholders_ temporales generados automáticamente.**

Son ilustraciones SVG con la identidad visual del proyecto (negro `#1a1a1a` / dorado `#FFD700` / rojo `#8B0000`), pensadas para que el preview no muestre huecos vacíos.

## 🔴 Acción pendiente (preproducción)

Cuando tengamos el **permiso de Eric**, en preproducción hay que **sustituir estos archivos por las imágenes reales**:

- **Museo** (`museo/`): las 170+ fotografías reales del bar (conciertos, estudio, personajes, mementos).
- **Tapas** (`menu/`): fotos reales de cada tapa.
- **Eric / equipo** (`equipo/`): retrato real de Eric Jiménez (ver fuentes y derechos en `docs/IMAGENES_PROMPTS.md`).
- **Eventos** (`eventos/`): carteles/fotos reales de cada evento.
- **Fachada / ubicación** (`ubicacion/`): foto real del local.
- **Logo / favicon** (`logo/`, `app/icon.svg`): logo definitivo de la marca.
- **Fondos** (`fondos/`): texturas finales (opcional).

> Mantener los **mismos nombres de archivo** (o actualizar las referencias en los componentes y en `lib/db/seed.ts`) para que el reemplazo sea directo.

## Cómo se generan

```bash
node scripts/generate-placeholders.mjs
```

Cada SVG incluye además un comentario interno:
`<!-- PLACEHOLDER: reemplazar por imagen real de Eric / del bar en preproducción -->`

Los prompts para generar versiones definitivas con IA (o como guía para la sesión de fotos real) están en **`docs/IMAGENES_PROMPTS.md`**.
