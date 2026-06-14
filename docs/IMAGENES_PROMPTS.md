# Prompts para Generar Imágenes — El Bar de Eric

> ⚠️ **Todas las imágenes marcadas como 🔴 son placeholders temporales** (SVG generados). Se reemplazarán por las fotos reales de Eric / del bar o por imágenes generadas con IA en preproducción.

Este documento contiene los prompts para generar todas las imágenes pendientes de la web de **El Bar de Eric** (bar museo del rock + tapas musicales + eventos, Granada) con herramientas de IA (Midjourney, DALL·E 3, Stable Diffusion…), además de un listado de **fuentes reales de fotos de Eric Jiménez y sus bandas**.

---

## Estado actual

### ✅ Fotos reales ya integradas (10 archivos en `public/images/bar-real/`)

| Archivo | Contenido | Usada en |
| --- | --- | --- |
| `neon-fachada.jpg` | Cartel neón "El Bar de Eric Museo" (desde dentro) | Hero (home) |
| `pared-fotos-musicos.jpg` | Pared de fotos enmarcadas de músicos + pizarra de raciones | Museo (home), Eventos (home) |
| `galeria-bandas.jpg` | Grid de fotos de bandas en marcos de madera | Museo (home) |
| `cuadros-backstage.jpg` | Cuadros con backstage passes y entradas de conciertos (pared roja) | Museo (home) |
| `rincon-memorabilia.jpg` | Rincón con papel de guitarras, fotos, cojines naranjas, estantería | Museo (home), Eventos (home) |
| `interior-rincon-guitarras.jpg` | Otro rincón interior con taburetes metálicos y lámpara | Museo (home), Eventos (home) |
| `barra.jpg` | Barra del bar con copas, azulejos y madera | Museo (home), Ubicación (home) |
| `logo-eric-bateria.jpg` | Ilustración de Eric tocando la batería por Migueline | Sobre Eric (home) |
| `tapa-salmorejo.jpg` | Salmorejo con brotes y jamón | Menú Preview (home) |
| `tapa-gourmet.jpg` | Tapa gourmet con salsa | Menú Preview (home) |

> **Nota:** Estas fotos solo están cableadas en los **componentes de la HOME**. Las páginas interiores (`/museo`, `/menu`, `/programacion`, `/sobre-eric`, `/contacto`, `/historia`, etc.) siguen usando los SVG placeholders.

---

### 🔴 Imágenes pendientes (48 archivos SVG placeholder)

| Categoría | Archivos | Cantidad | Páginas que los usan |
| --- | --- | :---: | --- |
| **Museo** | `museo/foto-1.svg` … `foto-20.svg` | 20 | `/museo`, `/museo/[id]`, `/historia` |
| **Tapas** | `menu/tapa-1.svg` … `tapa-15.svg` | 15 | `/menu`, `/menu/[slug]` |
| **Eventos** | `eventos/{concierto,exposicion,guia-rockera,taller}.svg` | 4 | `/programacion`, `/programacion/[slug]`, `/guia-rockera` |
| **Sobre Eric** | `equipo/eric.svg` | 1 | `/sobre-eric` |
| **Ubicación** | `ubicacion/fachada.svg` | 1 | `/contacto` |
| **Logo** | `logo/logo-horizontal.svg`, `logo/logo-square.svg` | 2 | Navbar (todas las páginas) |
| **Iconos** | `iconos/{museo,menu,programacion,guia,reservas,pedidos}.svg` | 6 | (No usados actualmente en componentes) |
| **Open Graph** | `og/og-image.svg` | 1 | Meta tags (layout.tsx) |
| **Fondos** | `fondos/textura-global.svg` + 6 más | 7 | `globals.css` (body) |

---

## 🎨 Identidad Visual

### Colores de la Marca
- **Negro (fondo principal):** `#1a1a1a`
- **Negro claro (superficies/cards):** `#2a2a2a`
- **Dorado vintage (acento):** `#FFD700`
- **Dorado oscuro (hover/detalle):** `#B8860B`
- **Rojo rock (acento fuerte):** `#8B0000`
- **Gris claro (texto secundario):** `#9CA3AF`

### Tipografías
- **Display (títulos):** Playfair Display
- **Cuerpo (texto):** Inter

### Tono visual
Estética de **museo del rock + Hard Rock Café casero**: paredes con papel de guitarras (blanco y negro), fotos enmarcadas de músicos, backstage passes, vinilos, neón rojo/verde, madera, cojines naranjas, pizarras de tiza. Editorial y nostálgico, nunca corporativo ni stock genérico.

> **Referencia real:** las 10 fotos del bar en `public/images/bar-real/` muestran exactamente el estilo real del local.

---

## 📸 Imágenes Necesarias

---

### 1. Logo Principal — 🔴 PENDIENTE
**Propósito:** Cabecera (Navbar) + favicon
**Archivos:** `logo/logo-horizontal.svg`, `logo/logo-square.svg`
**Formato:** PNG transparente
**Resolución:** 1200×400px (horizontal) + 512×512px (cuadrado/favicon)

> **Nota:** Ya existe la ilustración real de Migueline (`bar-real/logo-eric-bateria.jpg`) con Eric tocando la batería y "El Bar de Eric" en el bombo. Se puede usar como base del logo o adaptarla.

**Prompt:**
```
Create a professional logo for a rock music bar-museum called "El Bar de Eric" in Granada, Spain.

Reference: There is an existing hand-drawn illustration by artist Migueline showing a drummer (Eric) behind a drum kit with "El Bar de Eric" written on the bass drum, white chalk-style lines on black background.

Design requirements:
- Wordmark "El Bar de Eric" in an elegant high-contrast serif (Playfair Display style)
- Small icon element: stylized drumstick pair crossed, or the Migueline drummer illustration simplified
- Tagline below in clean sans-serif (Inter): "Donde la música se hace tapa"
- Color palette: matte black (#1a1a1a) background, vintage gold (#FFD700), rock red (#8B0000) accent
- Style: editorial, vintage rock poster meets minimalist, warm and timeless, NOT corporate
- Transparent PNG, clean solid colors, no gradients

Technical:
- 1200x400px horizontal + 512x512px square favicon version
- Crisp vector-like edges, legible at small sizes
```

---

### 2. Museo Digital — 20 fotos de galería — 🔴 PENDIENTE
**Propósito:** Galería del museo (`/museo`, `/museo/[id]`) y `/historia`
**Archivos:** `museo/foto-1.svg` … `museo/foto-20.svg`
**Resolución:** 1000×1000px (cuadrado) y 1200×800px (apaisado)
**Formato:** JPG/WebP, predominio blanco y negro

> **Ideal:** usar las **170+ fotografías reales** que cuelgan en las paredes del bar (con permiso de Eric). Las fotos `bar-real/pared-fotos-musicos.jpg`, `galeria-bandas.jpg` y `cuadros-backstage.jpg` muestran exactamente qué tipo de imágenes son.

**Prompt base:**
```
Vintage black-and-white rock music photograph for a museum gallery wall in a bar in Granada, Spain.

Reference style: The bar has walls covered in framed photos in natural wood frames, arranged in grids. Photos are mostly black and white or vintage color, showing bands, concerts, portraits of musicians.

Style requirements:
- Authentic 35mm film aesthetic, grainy black and white (or sepia-toned)
- Live concert / backstage / recording studio atmosphere from the 1980s-2000s Spanish indie & rock scene
- High contrast, dramatic stage lighting, documentary feel
- Slight aged/archival look (subtle scratches, warm tone)
- Editorial museum-quality framing

Technical: 1000x1000px or 1200x800px, JPG.
```

**Variantes (una por cada foto-N.svg):**

| # | Categoría | Prompt específico |
|---|-----------|-------------------|
| 1 | conciertos | `Drummer mid-performance behind a vintage drum kit on a small smoky club stage, dramatic backlight, black and white film grain.` |
| 2 | conciertos | `Rock band on stage, guitarist leaning into microphone, audience silhouettes in foreground, flash photography, 1990s Spanish indie.` |
| 3 | estudio | `Recording studio scene, mixing console and microphones, a musician with headphones, warm low light, archival black and white.` |
| 4 | estudio | `Close-up of hands adjusting knobs on an analog mixing desk, cable spaghetti, dim red light, 35mm film grain.` |
| 5 | personajes | `Portrait of a Spanish rock musician in the 1990s, leather jacket, candid expression, high-contrast black and white studio portrait.` |
| 6 | personajes | `Two musicians laughing backstage, casual clothes, cigarette smoke, candid snapshot, warm sepia tone.` |
| 7 | conciertos | `Small club concert from the audience perspective, raised fists, stage fog, red and blue lights cutting through darkness.` |
| 8 | mementos | `Still life of rock memorabilia on black velvet: a worn leather jacket, drumsticks, concert ticket stubs, a vinyl record. Warm gallery spotlight.` |
| 9 | conciertos | `Bass player on stage in profile, dramatic rim light, out-of-focus crowd, black and white with high contrast.` |
| 10 | personajes | `Group photo of an indie rock band posing against a graffiti wall in Granada, 1990s fashion, casual, black and white.` |
| 11 | mementos | `Wall covered with framed backstage passes, tour laminates, and concert wristbands, red wall background, warm lighting.` |
| 12 | estudio | `Vocalist in an isolation booth, vintage microphone, headphones, eyes closed singing, warm amber light, film grain.` |
| 13 | conciertos | `Overhead shot of a drum kit during performance, drumsticks in motion blur, cymbal splash caught mid-air.` |
| 14 | personajes | `Candid portrait of a musician sitting at a bar counter, leather jacket, whiskey glass, moody side lighting, black and white.` |
| 15 | mementos | `Collection of vinyl record covers arranged in a fan on dark wood, classic rock and Spanish indie albums, warm directional light.` |
| 16 | conciertos | `Festival stage from behind the performers, crowd extending to the horizon, sunset backlighting, epic wide shot.` |
| 17 | estudio | `Musician tuning a guitar in a dimly lit rehearsal room, amplifiers and cables in background, intimate atmosphere.` |
| 18 | personajes | `Young rock band loading equipment into a tour van, black and white, street photography, candid energy.` |
| 19 | mementos | `Framed concert setlist handwritten on paper, alongside guitar picks and a drumstick, museum display style.` |
| 20 | conciertos | `Silhouette of a singer at microphone, single spotlight, smoke machine haze, dramatic theatrical lighting.` |

---

### 3. Platos del Menú Real — 15 fotos — 🔴 PENDIENTE
**Propósito:** Tarjetas de plato (`/menu`, `/menu/[slug]`)
**Archivos:** `menu/tapa-1.png` … `menu/tapa-15.png`
**Resolución:** 800×800px (cuadrado)
**Formato:** PNG/JPG/WebP

> **Referencia real:** Las fotos `bar-real/tapa-salmorejo.jpg` y `bar-real/tapa-gourmet.jpg` muestran el estilo de presentación: platos blancos cuadrados, presentación cuidada tipo gastrobar, sin pretensiones pero con nivel. El menú real incluye raviolis de pasta brick, roscas crujientes al grill, chapatas, ensaladas y raciones.

**Prompt base:**
```
Appetizing close-up food photography of a dish from a Spanish rock bar-museum in Granada.
Served on a white square ceramic plate on a dark wooden bar counter.

Reference style: Real photos from "El Bar de Eric" show clean white square plates,
elegant but unpretentious gastrobar plating, natural warm restaurant lighting.

Style requirements:
- Warm directional light from the left, dark background with subtle warm ambient
- Editorial gastronomy style, shallow depth of field, steam/texture visible
- Gastrobar level — above casual tapas, below Michelin fine dining
- Realistic restaurant photography, NOT stock, NOT AI-looking
- Slight warmth in shadows, wood/dark surface visible at edges

Technical: 800x800px square, JPG.
```

**Prompts específicos (platos reales del menú):**

| # | Plato | Precio | Prompt del plato |
|---|-------|--------|------------------|
| 1 | Carpaccio de Calabacín | 8,00€ | `Thin translucent slices of raw zucchini carpaccio, fanned on white square plate. Topped with lemon zest, shaved Parmesan, arugula, black pepper, soy sauce drizzle, toasted sesame seeds, and EVOO. Light, fresh, elegant. Garnished with microgreens.` |
| 2 | Ensaladilla Tartara de Atún | 11,00€ | `Spanish ensaladilla rusa reimagined: potato salad with tartare sauce, tuna (atún), boiled egg, olives, capers, black olives, served as an elegant quenelle on white plate. Drizzled with EVOO, pimentón, soy, caramelized sesame. Crispy lentil crouton on the side.` |
| 3 | Ravioli de Queso y Brie | 12,00€ | `Crispy golden brick-pastry ravioli (rollito de pasta brick) filled with melted Brie cheese, mixed with cherry tomato, vegan soy mayo. On white plate with caramelized sesame, EVOO, pimentón, soy drizzle. Cut open showing melted cheese interior. Honey and sugarcane drizzle.` |
| 4 | Ravioli de Salmón | 13,50€ | `Crispy golden brick-pastry ravioli filled with smoked salmon and cream cheese (Philadelphia), Greek yogurt-garlic sauce. On white plate with capers scattered, caramelized pimentón, EVOO, soy, sesame. One cut open showing pink salmon filling. Honey and sugarcane drizzle.` |
| 5 | Ravioli Vegano | 12,00€ | `Crispy golden brick-pastry ravioli filled with aged manchego-style vegan cheese. On white plate with EVOO, pimentón, toasted sesame, soy drizzle, sugarcane honey. Artfully plated with fresh herbs.` |
| 6 | Rollitos Crujientes de Lomo | 13,40€ | `Golden crispy phyllo-wrapped rolls (rollitos de pasta filo) stuffed with slow-cooked pork loin (lomo a la leña), with honey-mustard vinaigrette. On white plate with caramelized sesame, pimentón, soy drizzle, sugarcane honey. Two rolls cut diagonally showing tender meat inside.` |
| 7 | Serrat | 12,00€ | `Seared tuna belly (ventresca de atún) on a golden puff pastry base (hojaldre). Topped with piquillo peppers, chorizo crumbles. On white plate with EVOO, caramelized pimentón, soy, sesame. Rich amber-red colors, glistening surface.` |
| 8 | Rosca de Jamón Reserva de Castaña | 12,50€ | `Crispy pressed rosca (round grilled sandwich) cut in half, showing interior of acorn-fed Iberian ham (jamón reserva de castaña), shaved Parmesan, fresh tomato, and arugula. Golden grill marks on bread exterior. On white plate, toasted and crunchy. Spanish gourmet sandwich.` |
| 9 | Rosca de Salmón Ahumado | 12,50€ | `Crispy pressed rosca cut in half showing smoked salmon filling with cream cheese, fresh dill, and crispy onion. Golden grill marks on the bread. On white plate, elegant presentation. Pink salmon visible through the cut.` |
| 10 | Rosca Mallorquina | 12,50€ | `Crispy pressed rosca cut in half showing sobrasada (Mallorcan spreadable sausage) melted with Brie cheese and drizzled with honey (miel de abeja). Golden grill marks, rustic but refined. On white plate. The red-orange sobrasada contrasting with melted white cheese.` |
| 11 | Chapata de Jamón, Pera y Gorgonzola | 8,00€ | `Artisan ciabatta sandwich (chapata) filled with acorn-fed ham (jamón de castaña), sliced fresh pear, melted Gorgonzola cheese, arugula. On white plate with cherry tomatoes, soy, caramelized sesame garnish. Cut diagonally showing layers of filling.` |
| 12 | Chapata Vegana de Hummus | 8,00€ | `Artisan ciabatta sandwich filled with hummus, roasted piquillo peppers, fresh spinach sprouts (brotes de espinacas). On white plate with cherry tomatoes, soy, caramelized sesame. Colorful cross-section showing layers of orange hummus and green sprouts.` |
| 13 | Sandwich de Pollo con Alioli de Azafrán y Manzana | 8,00€ | `Gourmet chicken sandwich on a hamburger bun: roasted chicken breast with saffron-apple alioli (alioli de azafrán y manzana), roasted tomato, topped with sherry-caramelized tomato relish, soy, caramelized sesame. On white plate, golden and appetizing. The yellow saffron alioli visible.` |
| 14 | Ensalada de Quinoa, Lentejas y Frutos Rojos | 9,80€ | `Colorful healthy salad: quinoa, lentils, and red berries (frutos rojos — cranberries, pomegranate) on white plate. Topped with crispy lentil crouton, EVOO, pimentón, soy, caramelized sesame. Fresh and vibrant, pink-red-green-brown earth tones.` |
| 15 | Tabla de Jamón y Queso | 15,50€ | `Generous Spanish sharing board: sliced jamón gran reserva de castaña (acorn-fed ham) and extra-aged raw-milk Manchego cheese. On dark wooden board with piquillo peppers, breadsticks (picos), and walnuts. Warm spotlight, dark bar background. Artisan, generous, authentic.` |

---

### 4. Banners de Eventos — 4 tipos — 🔴 PENDIENTE
**Propósito:** Tarjetas y detalle de eventos (`/programacion`, `/programacion/[slug]`, `/guia-rockera`)
**Archivos:** `eventos/concierto.svg`, `exposicion.svg`, `guia-rockera.svg`, `taller.svg`
**Resolución:** 1200×630px
**Formato:** JPG/WebP

> **Referencia real:** En la home los eventos ya usan fotos reales del interior del bar. Para las páginas interiores hacen falta imágenes genéricas por tipo de evento.

**Prompt base:**
```
Atmospheric event banner image for a rock music bar-museum in Granada, Spain.

Style: warm, intimate, small venue atmosphere, vintage/editorial feel.
Palette: deep blacks, warm amber, gold and red accents.
Technical: 1200x630px, JPG. Leave space at top/bottom for overlaid text.
```

**Variantes por tipo:**

| # | Tipo | Prompt |
|---|------|--------|
| 1 | **Concierto** | `Small intimate bar stage, drum kit and microphones set up, warm stage lights, empty chairs in foreground waiting for the audience, atmospheric haze. Live music venue about to start.` |
| 2 | **Exposición** | `Gallery wall densely hung with framed black-and-white photographs in natural wood frames, warm spotlights creating pools of light, museum atmosphere in a bar setting.` |
| 3 | **Guía Rockera** | `Narrow picturesque street in the Albaicín quarter of Granada, guitar leaning against a whitewashed wall, warm afternoon light, hand-drawn map visible. Musical walking tour feel.` |
| 4 | **Taller** | `Close-up of hands on a drum kit, wooden drumsticks striking a snare drum, dynamic motion blur, warm sidelight, workshop/learning atmosphere.` |

---

### 5. Retrato de Eric — 1 imagen — 🔴 PENDIENTE
**Propósito:** Página `/sobre-eric`
**Archivo:** `equipo/eric.svg`
**Resolución:** 800×1000px (retrato)
**Formato:** JPG/WebP

> **Ideal:** usar una foto real de Eric proporcionada por él mismo. Ya tenemos la ilustración de Migueline (`bar-real/logo-eric-bateria.jpg`) en la home. Para la página interior se necesita una foto real o un retrato generado.

**Prompt (placeholder estilizado si no hay foto real):**
```
Editorial black-and-white portrait of a veteran Spanish rock drummer in his 50s, behind a vintage drum kit in a small bar. Leather jacket, glasses, intense but warm candid expression. Dramatic side light, film grain, gold rim light reflecting off cymbals. Museum-quality, respectful, iconic.

Reference: The real bar has walls covered in framed photos, a neon sign "El Bar de Eric Museo", and an illustration showing Eric with spiky hair, glasses, and striped shirt behind a drum kit.

800x1000px portrait, JPG.
```

---

### 6. Fachada / Ubicación — 1 imagen — 🔴 PENDIENTE
**Propósito:** Página `/contacto`
**Archivo:** `ubicacion/fachada.svg`
**Resolución:** 1200×800px
**Formato:** JPG/WebP

> **Referencia real:** `bar-real/neon-fachada.jpg` muestra el cartel neón desde dentro. Falta una foto del exterior / fachada de Calle Escuelas 8.

**Prompt:**
```
Exterior facade of a small characterful rock bar called "El Bar de Eric" in the historic center of Granada, Spain, at dusk.

Scene:
- Narrow old-town street (Calle Escuelas), stone buildings
- Neon sign in the window reading "el bar de Eric museo" in green and red neon
- Warm light spilling from inside revealing photo-covered walls
- Small terrace with a couple of tables outside
- Cozy, inviting, neighborhood bar feel

Style: editorial travel photography, golden hour/dusk lighting, warm tones.
1200x800px, JPG.
```

---

### 7. Open Graph / Social Share — 1 imagen — 🔴 PENDIENTE
**Propósito:** Metadatos SEO, compartir en redes sociales
**Archivo:** `og/og-image.svg`
**Resolución:** 1200×630px
**Formato:** JPG/PNG

**Prompt:**
```
Social share card image for "El Bar de Eric" rock bar-museum in Granada.

Layout:
- Left 2/3: real bar interior — wall of framed black-and-white rock photos, warm lighting, neon glow
- Right 1/3: solid black panel with the text "El Bar de Eric" in vintage gold (#FFD700) and tagline "Donde la música se hace tapa" below
- Thin horizontal red (#8B0000) accent line separating title and tagline
- Bottom right: "Granada · Desde 2013"

Style: bold, editorial, legible at thumbnail size.
1200x630px, JPG.
```

---

### 8. Fondos / Texturas — 7 archivos — 🔴 PENDIENTE (baja prioridad)
**Propósito:** Fondos de página y sección
**Archivos:** `fondos/textura-global.svg` + `hero-collage.svg`, `patron-vinilos.svg`, `madera-menu.svg`, `cartel-eventos.svg`, `neon-reservas.svg`, `dashboard-textura.svg`, `divisor.svg`

> **Nota:** Los SVG actuales funcionan como texturas sutiles. La `textura-global.svg` se usa como fondo del body en `globals.css`. El `hero-collage.svg` ya no se usa (reemplazado por `neon-fachada.jpg`). Se pueden mantener los SVGs actuales o generar texturas fotográficas.

**Prompts:**

| # | Archivo | Prompt |
|---|---------|--------|
| 1 | `textura-global.svg` | `Seamless tileable dark texture: subtle black concrete/plaster wall with faint grain, almost solid #1a1a1a. Tileable 2048x2048px.` |
| 2 | `patron-vinilos.svg` | `Seamless repeating pattern of vinyl records and music notes, dark charcoal on black, extremely low contrast. Tileable PNG 800x800px.` |
| 3 | `madera-menu.svg` | `Seamless dark aged wood bar-counter texture, deep brown-black, warm low light. Tileable 2048x1024px.` |
| 4 | `cartel-eventos.svg` | `Distressed silkscreen gig-poster paper texture, black with faint red and gold ink stains, halftone grain. 1920x1080px.` |
| 5 | `neon-reservas.svg` | `Dark bar wall with soft out-of-focus warm neon glow (gold/red bokeh), heavy blur, mostly black. 1920x800px.` |
| 6 | `dashboard-textura.svg` | `Very subtle dark texture: faint diagonal carbon-fiber pattern in #1a1a1a / #2a2a2a, minimal, professional. Tileable 2048x2048px.` |
| 7 | `divisor.svg` | `Thin horizontal grunge divider: distressed film-strip motif in gold (#FFD700) on transparent background. 1920x120px PNG.` |

---

### 9. Iconos UI — 6 archivos — 🔴 PENDIENTE (baja prioridad)
**Archivos:** `iconos/{museo,menu,programacion,guia,reservas,pedidos}.svg`
**Resolución:** 200×200px, PNG transparente

> **Nota:** Los iconos SVG actuales funcionan bien. Solo reemplazar si se quiere un estilo más elaborado.

**Prompt base:** `Simple minimalist line-art icon, vintage gold (#FFD700) on transparent background, single weight strokes, rock-music themed, 200x200px.`

| # | Icono | Prompt |
|---|-------|--------|
| 1 | Museo | `Framed photograph / picture frame icon.` |
| 2 | Menú | `Tapa plate with a small music note icon.` |
| 3 | Programación | `Calendar with a small guitar pick icon.` |
| 4 | Guía | `Map pin with a music note icon.` |
| 5 | Reservas | `Restaurant table with two chairs icon.` |
| 6 | Pedidos | `Takeaway bag with a vinyl record icon.` |

---

## 📋 Checklist de Imágenes

| Imagen | Placeholder SVG | Foto real | Prioridad |
| --- | :---: | :---: | --- |
| **10 fotos del bar** (interior, tapas, neón, Eric) | – | ✅ En `bar-real/` | – |
| Logo horizontal + favicon cuadrado | ✅ | 🔴 | Alta |
| 20 fotos de museo | ✅ | 🔴 | Alta |
| 15 fotos de tapas | ✅ | 🔴 | Alta |
| 4 banners de eventos | ✅ | 🔴 | Media |
| Retrato de Eric | ✅ | 🔴 | Alta |
| Fachada / ubicación | ✅ | 🔴 | Media |
| Open Graph | ✅ | 🔴 | Media |
| 7 fondos / texturas | ✅ | 🔴 | Baja |
| 6 iconos de UI | ✅ | 🔴 | Baja |

**Total: 10 fotos reales integradas · 48 placeholders pendientes**

### Prioridad de generación recomendada:
1. **Logo** — Es lo primero que se ve en el Navbar de TODAS las páginas
2. **20 fotos museo** — La galería es la sección estrella del bar
3. **15 fotos tapas** — El menú es funcionalidad clave
4. **Retrato de Eric** — La página `/sobre-eric` necesita una imagen personal
5. **4 banners eventos** — Para la programación
6. **Fachada** — Para la página de contacto
7. **Open Graph** — Para compartir en redes
8. **Fondos y iconos** — Los actuales funcionan, baja prioridad

---

## 🖼️ Fotos REALES de Eric Jiménez y sus bandas (fuentes en Internet)

> **Aviso de derechos:** la mayoría de estas imágenes tienen **copyright**. Para la web se recomienda: (1) usar las fotos que **Eric proporcione directamente**, (2) usar imágenes con licencia libre de Wikipedia/Commons con atribución, o (3) licenciar las fotos a sus autores/medios.

### Eric Jiménez (retratos / directo)
- **Wikipedia (ES):** https://es.wikipedia.org/wiki/Eric_Jim%C3%A9nez
- **Wikimedia Commons:** https://commons.wikimedia.org/w/index.php?search=Eric+Jim%C3%A9nez+Lagartija+Nick&type=image
- **elDiario.es** — reaparición Sonorama: https://www.eldiario.es/cultura/musica/eric-jimenez-bateria-emblematico-planetas-reaparece-concierto-sonorama_1_11577365.html
- **Valencia Plaza** — historia: https://valenciaplaza.com/eric-jimenez-los-planetas-y-lagartija-nick-la-verdadera-historia
- **EFE Eme** — «Músicos en la sombra»: https://www.efeeme.com/musicos-en-la-sombra-eric-jimenez-en-los-tambores-de-lagartija-nick-los-planetas-y-los-evangelistas/
- **Muzikalia** — entrevista: https://muzikalia.com/entrevistamos-a-eric-jimenez-los-planetas-lagartija-nick-por-su-nuevo-libro/

### Documental
- **«La importancia de llamarse Ernesto…»** — tráiler: https://www.youtube.com/watch?v=zW8-nqHYlOY

### Las bandas
- **Lagartija Nick** (IndyRock): https://indyrock.es/lagartija.htm
- **Lagartija Nick** — homenaje 2025: https://www.elespanol.com/el-cultural/escenarios/20250325/viva-lagartija-nick-ciclo-conciertos-documentales-homenajea-banda-surrealista-granada/933656879_0.html

### El Bar de Eric (interior, museo, tapas, fachada)
- **Blog oficial:** https://elbardeeric.wordpress.com/
- **Guía Repsol:** https://www.guiarepsol.com/es/fichas/solete/el-bar-de-eric-326201/
- **Turismo Granada:** https://turismo.granada.org/en/bar-eric
- **Facebook del bar:** facebook.com/elbardeeric
- **Google Maps** — «El Bar de Eric, Calle Escuelas 8, Granada» (4,3★ · 1244 reseñas, galería de fotos)

> **Recomendación práctica:** pedir a Eric el archivo de las **170+ fotografías reales** del museo — son el contenido ideal para la galería digital.

---

## 🔧 Instrucciones de Uso

### Midjourney
- Usa los prompts tal cual; añade `--ar 16:9` (banners/eventos), `--ar 1:1` (tapas/museo), `--ar 4:5` (retratos).
- `--style raw` para mayor control fotográfico; `--seed 12345` para variaciones consistentes.

### DALL·E 3 / GPT-4o
- Simplifica las especificaciones de píxeles; mantén estilo, escena y paleta HEX.

### Stable Diffusion / Flux
- Divide prompts largos; genera a mayor resolución y redimensiona.

---

## 💡 Consejos

1. **Consistencia de paleta:** negro `#1a1a1a` + dorado `#FFD700` + rojo `#8B0000` en todas las piezas.
2. **Coherencia de museo:** las fotos de galería en **blanco y negro / sepia** con grano de película.
3. **Tapas apetecibles** sobre fondo oscuro, platos blancos cuadrados (como los reales del bar), luz cálida.
4. **Respeto y derechos:** priorizar fotos reales cedidas por Eric; citar autoría.
5. **Optimización web:** exportar en **WebP**, tamaños ≤ 200 KB, usar `next/image` cuando sea posible.
6. **Reemplazo:** sustituir el archivo SVG manteniendo el **mismo nombre y ruta**, o actualizar la referencia en el componente y en `lib/db/seed.ts`.

---

**Generado para:** El Bar de Eric — *Donde la música se hace tapa*
**Fecha:** Junio 2026
**Versión:** 2.0 — Actualizado con 10 fotos reales integradas
