# Prompts para Generar Imágenes — El Bar de Eric

Este documento contiene los prompts para generar todas las imágenes de la web de **El Bar de Eric** (bar museo del rock + tapas musicales + eventos, Granada) con herramientas de IA (Midjourney, DALL·E 3, Stable Diffusion…), además de un listado de **fuentes reales de fotos de Eric Jiménez y sus bandas** disponibles en Internet.

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
Estética de **museo del rock + Hard Rock Café casero**: paredes negras repletas de fotos en blanco y negro, carteles de conciertos, vinilos, neón dorado/rojo cálido, madera vieja, luz tenue de tasca granadina. Editorial y nostálgico, nunca corporativo ni stock genérico.

---

## 📸 Imágenes Necesarias

### 1. Logo Principal
**Propósito:** Cabecera (Navbar) + favicon
**Formato:** PNG transparente
**Resolución:** 1200×400px (horizontal) + 512×512px (cuadrado/favicon)
**Estilo:** Tipográfico, editorial rockero

**Prompt:**
```
Create a professional logo for a rock music bar-museum called "El Bar de Eric" in Granada, Spain.

Design requirements:
- Wordmark "El Bar de Eric" in an elegant high-contrast serif (Playfair Display style)
- Small icon element: a stylized drumstick pair crossed, or a vinyl record, in vintage gold (#FFD700)
- Tagline below in clean sans-serif (Inter): "Donde la música se hace tapa"
- Color palette: matte black (#1a1a1a) background, vintage gold (#FFD700), rock red (#8B0000) accent
- Style: editorial, vintage rock poster meets minimalist, warm and timeless, NOT corporate
- Transparent PNG, clean solid colors, no gradients

Technical:
- 1200x400px horizontal + 512x512px square favicon version
- Crisp vector-like edges, legible at small sizes
```

---

### 2. Hero Section — Home
**Propósito:** Fondo de la sección principal de la home (`HeroSection`)
**Resolución:** 1920×1080px (16:9)
**Formato:** JPG/WebP

**Prompt:**
```
Atmospheric hero image for a rock music bar-museum website in Granada, Spain.

Scene:
- Interior of a dimly lit, characterful tapas bar whose black walls are completely covered with framed black-and-white rock photographs, vintage concert posters, set lists, and music memorabilia
- Warm low light, gold and red glow from neon and vintage lamps
- Old wooden bar counter, a drum kit or vinyl records subtly visible
- Cinematic, intimate, nostalgic mood — a "homemade Hard Rock Cafe" with the soul of a rock museum

Color palette: deep matte black (#1a1a1a), vintage gold highlights (#FFD700), rock red accents (#8B0000), warm amber light
Style: editorial photography, shallow depth of field, film grain, no people in foreground (space for overlaid text on the left third), NOT a generic stock bar
Resolution: 1920x1080px, 16:9
```

---

### 3. Museo Digital — Fotos de Galería (12+ imágenes)
**Propósito:** Galería del museo (`GaleriaFotos`) y seed de `galeria_fotos`
**Resolución:** 1000×1000px (cuadrado) y 1200×800px (apaisado)
**Formato:** JPG/WebP, predominio blanco y negro

**Prompt base:**
```
Vintage black-and-white rock music photograph for a museum gallery wall.

Style requirements:
- Authentic 35mm film aesthetic, grainy black and white (or sepia-toned)
- Live concert / backstage / recording studio atmosphere from the 1980s-2000s Spanish indie & rock scene
- High contrast, dramatic stage lighting, documentary feel
- Slight aged/archival look (subtle scratches, warm tone)
- Editorial museum-quality framing

Technical: 1000x1000px or 1200x800px, JPG. Evocative, timeless, NOT modern digital glossy.
```

**Variantes por categoría (las 4 del filtro de la web):**

1. **Conciertos** — `Drummer mid-performance behind a vintage drum kit on a small smoky club stage, dramatic backlight, black and white film grain.`
2. **Estudio** — `Recording studio scene, mixing console and microphones, a musician with headphones, warm low light, archival black and white.`
3. **Personajes** — `Portrait of a Spanish rock musician in the 1990s, leather jacket, candid expression, high-contrast black and white studio portrait.`
4. **Mementos** — `Still life of rock memorabilia on black velvet: a worn leather jacket, drumsticks, a concert ticket stub, a vinyl record. Warm gallery spotlight, gold accents.`

> En la web la categoría usa los valores `conciertos`, `estudio`, `personajes`, `mementos` (campo `categoria` de la tabla `galeria_fotos`).

---

### 4. Menú — Tapas Musicales (15 imágenes)
**Propósito:** Tarjetas de tapa (`TapaCard`) y seed de `menu_items`
**Resolución:** 800×800px (cuadrado)
**Formato:** JPG/WebP

**Prompt base:**
```
Appetizing close-up food photography of a Spanish tapa, served on rustic ceramic, on a dark moody wooden table.

Style requirements:
- Warm directional light, dark background (#1a1a1a) with subtle gold rim light
- Editorial gastronomy style, shallow depth of field, steam/texture visible
- Small, elegant, "gastrobar" plating — not fast food
- Color palette accents in gold (#FFD700) and deep red (#8B0000) props (napkin, glass of wine)

Technical: 800x800px square, JPG. Mouth-watering, premium, intimate rock-bar mood.
```

**Prompts específicos (nombre musical → plato):**

1. **Inercia** (Lagartija Nick, 1992) — `Croquetas de jamón ibérico, golden crispy, served on slate with a sprig of parsley.`
2. **Omega** (Lagartija Nick + Enrique Morente, 1996) — `Artisan cheese and Iberian ham board with grapes and breadsticks, candlelit.`
3. **Qué Puedo Hacer** (Los Planetas, 2000) — `Sizzling garlic prawns (camarones al ajillo) in a clay cazuela with chili and parsley.`
4. **Pop** (Los Planetas, 1994) — `Mushroom and truffle croquettes, creamy interior shown, dusted with herbs.`
5. **Keith Moon** (The Who) — `Mixed grilled meats platter (surtido de carnes a la brasa), smoky, charred edges.`
6. **Un Buen Día** (Los Planetas, 1996) — `Spanish ensaladilla rusa in an elegant quenelle, olive oil drizzle, on dark plate.`
7. **Lagartija** (Nick Cave ref.) — `Mini gourmet hamburgers with caramelized onion, on a wooden board.`
8. **Joe Strummer** (The Clash) — `Nachos with guacamole and pico de gallo, vibrant, sharing plate.`
9. **091** (banda granadina) — `Patatas bravas with homemade alioli and spicy red sauce, rustic bowl.`
10. **Los Evangelistas** (banda de Eric) — `Large mixed sharing board: cheeses, hams, croquettes, olives, candlelit.`
11. **Lux Interior** (The Cramps) — `Rock-style chicken wings glazed and glossy, with dipping sauce.`
12. **Sonic Youth** — `Andalusian gazpacho in a glass with diced vegetable garnish, fresh and cold.`
13. **Patti Smith** — `Smoked salmon toast (tosta) with capers and dill on artisan bread.`
14. **Satisfaction** (Rolling Stones) — `Pork loin and roasted pepper montadito on crusty bread.`
15. **London Calling** (The Clash) — `Fish & chips with tartar sauce, golden battered, lemon wedge.`

---

### 5. Programación — Banners de Eventos (4 tipos)
**Propósito:** Tarjetas y detalle de eventos (`EventCard`, `programacion/[slug]`)
**Resolución:** 1200×630px (también sirve como Open Graph)
**Formato:** JPG/WebP

**Prompt base:**
```
Vintage rock concert poster style banner for a music bar event in Granada.

Style requirements:
- Bold editorial layout, distressed paper / silkscreen texture
- Matte black (#1a1a1a) background, vintage gold (#FFD700) and rock red (#8B0000) typography accents
- Space at top/bottom for overlaid event title and date
- Atmospheric, gig-poster aesthetic, NOT clip-art

Technical: 1200x630px, JPG.
```

**Variantes por tipo (`tipo` del evento):**
1. **Concierto** — `Silhouette of a live band on a small smoky stage, spotlight beams, gold/red.`
2. **Exposición** — `Gallery wall of framed black-and-white rock photographs, warm spotlights.`
3. **Guía Rockera** — `Vintage map of Granada with a musical route marked, guitar and city skyline silhouette.`
4. **Taller** — `Close-up of hands on drum sticks / vinyl turntable, workshop atmosphere, warm light.`

---

### 6. Sobre Eric — Retrato (1 imagen principal + ambiente)
**Propósito:** Sección `SobreEric` (home) y página `/sobre-eric`
**Resolución:** 800×1000px (retrato)
**Formato:** JPG/WebP

> ⚠️ Para una foto **real** de Eric, ver la sección «Fotos reales» más abajo. El siguiente prompt es solo para un placeholder estilizado si no se dispone de derechos de la foto real.

**Prompt (placeholder estilizado):**
```
Editorial black-and-white portrait of a veteran Spanish rock drummer in his 50s, behind a vintage drum kit, leather jacket, intense candid expression, dramatic side light, film grain, warm gold rim light. Museum-quality, respectful, iconic. 800x1000px portrait.
```

---

### 7. Ubicación — Fachada / Ambiente (1 imagen)
**Propósito:** Sección `UbicacionHorarios` y `/contacto`
**Resolución:** 1200×800px
**Formato:** JPG/WebP

**Prompt:**
```
Exterior facade of a characterful rock bar in the historic center of Granada at dusk, warm light spilling from the windows revealing photo-covered walls inside, vintage hand-painted sign, narrow old-town street, cozy and inviting. Editorial travel photography, golden hour. 1200x800px.
```

---

### 8. UI — Iconos de Sección (6 iconos)
**Propósito:** Navegación, dashboard, tarjetas de sección
**Resolución:** 200×200px
**Formato:** PNG transparente

**Prompt base:**
```
Simple minimalist line-art icon, vintage gold (#FFD700) on transparent background, single weight strokes, rock-music themed, 200x200px transparent PNG.
```

**Iconos:**
1. **Museo** — `framed photograph / picture frame icon.`
2. **Menú** — `tapa plate with a music note icon.`
3. **Programación** — `calendar with a small guitar pick icon.`
4. **Guía Rockera** — `map pin with a music note icon.`
5. **Reservas** — `restaurant table with two chairs icon.`
6. **Pedidos** — `takeaway bag with a vinyl record icon.`

---

### 9. Open Graph / Social Share (1 imagen)
**Propósito:** Metadatos SEO (`opengraph-image`), compartir en redes
**Resolución:** 1200×630px
**Formato:** JPG/PNG

**Prompt:**
```
Social share image for "El Bar de Eric" rock bar-museum. Black wall of framed black-and-white rock photos, the logo and tagline "Donde la música se hace tapa" in vintage gold (#FFD700) overlaid, rock red (#8B0000) accent bar. Editorial, bold, legible. 1200x630px.
```

---

## 📋 Checklist de Imágenes

- [ ] Logo horizontal + favicon cuadrado
- [ ] Hero home (1920×1080)
- [ ] 12 fotos de museo (3 por categoría × 4 categorías)
- [ ] 15 fotos de tapas
- [ ] 4 banners de eventos
- [ ] Retrato de Eric (real o placeholder)
- [ ] Fachada / ubicación
- [ ] 6 iconos de UI
- [ ] Open Graph

**Total aproximado: ~41 imágenes**

---

## 🖼️ Fotos REALES de Eric Jiménez y sus bandas (fuentes en Internet)

> **Aviso de derechos:** salvo la ficha de Wikipedia (que suele enlazar a Wikimedia Commons con licencia libre), la mayoría de estas imágenes son **fotos de prensa o del propio bar y tienen copyright**. Para la web pública se recomienda: (1) usar las fotos que **Eric proporcione directamente** —tal y como ya prevé el prompt original del proyecto—, (2) usar la imagen libre de Wikipedia/Commons con su atribución, o (3) licenciar las fotos a sus autores/medios. Lo que sigue son las **fuentes donde encontrar el material**, no enlaces de hotlink.

### Eric Jiménez (retratos / directo)
- **Wikipedia (ES)** — ficha biográfica, normalmente con foto en Wikimedia Commons (licencia libre, comprobar atribución): https://es.wikipedia.org/wiki/Eric_Jim%C3%A9nez
- **Wikimedia Commons** (buscador de imágenes libres): https://commons.wikimedia.org/w/index.php?search=Eric+Jim%C3%A9nez+Lagartija+Nick&type=image
- **elDiario.es** — «Eric Jiménez… reaparece para su concierto en Sonorama» (foto de prensa en directo): https://www.eldiario.es/cultura/musica/eric-jimenez-bateria-emblematico-planetas-reaparece-concierto-sonorama_1_11577365.html
- **Valencia Plaza** — «Eric Jiménez (Los Planetas y Lagartija Nick): la verdadera historia»: https://valenciaplaza.com/eric-jimenez-los-planetas-y-lagartija-nick-la-verdadera-historia
- **Público** — entrevista con fotografías: https://www.publico.es/culturas/musica/ventaja-triunfar-seguir-siendo-libre.html
- **EFE Eme** — «Músicos en la sombra: Eric Jiménez»: https://www.efeeme.com/musicos-en-la-sombra-eric-jimenez-en-los-tambores-de-lagartija-nick-los-planetas-y-los-evangelistas/
- **Muzikalia** — entrevista por su libro (incluye fotos): https://muzikalia.com/entrevistamos-a-eric-jimenez-los-planetas-lagartija-nick-por-su-nuevo-libro/
- **IndyRock** — biografía con material gráfico: https://www.indyrock.es/ericjimenez.htm
- **Maneras de Vivir** — autoentrevista: https://www.manerasdevivir.com/noticias/62136/autoentrevista-eric-jimenez-planetas-lagartija-nick

### Documental (frames / material promocional)
- **«La importancia de llamarse Ernesto…»** (documental sobre Eric) — tráiler/material: https://www.youtube.com/watch?v=zW8-nqHYlOY
- Entrevista a raíz del documental: https://www.youtube.com/watch?v=b55dsZk6I9Y

### Las bandas
- **Lagartija Nick** (IndyRock): https://indyrock.es/lagartija.htm
- **Lagartija Nick** — ciclo homenaje en El Español/El Cultural (fotos recientes 2025): https://www.elespanol.com/el-cultural/escenarios/20250325/viva-lagartija-nick-ciclo-conciertos-documentales-homenajea-banda-surrealista-granada/933656879_0.html
- Crónica de concierto Lagartija Nick (Exile SH Magazine, 2024): https://exileshmagazine.com/2024/10/lagartija-nick-35-anos-rambleta.html

### El Bar de Eric (interior, museo, tapas, fachada)
- **Blog oficial** (WordPress del bar): https://elbardeeric.wordpress.com/
- **Guía Repsol** (Solete) — ficha con fotos del local: https://www.guiarepsol.com/es/fichas/solete/el-bar-de-eric-326201/
- **Turismo Ayuntamiento de Granada**: https://turismo.granada.org/en/bar-eric
- **Visitar Granada** — «Eric Jiménez abre un bar museo de rock»: https://www.visitargranada.com/blog/eric-jimenez-conocido-bateria-granadino-abre-un-bar/
- **La Guía Go!**: https://www.laguiago.com/articulo/granada/el-bar-de-eric/20150906100924367812.html
- **Granada por el Mundo** — tapas y actuaciones: https://granadaporelmundo.com/el-bar-de-eric/
- **Wanderlog** (fotos de usuarios/local): https://wanderlog.com/place/details/1618308/el-bar-de-eric
- **Facebook del bar**: facebook.com/elbardeeric
- **Google Maps / Google Business** — «El Bar de Eric, Calle Escuelas 8, Granada» (galería de fotos de clientes, 4,3★ · 1244 reseñas)

> **Recomendación práctica:** pedir a Eric el archivo de las **170+ fotografías reales** que ya cuelgan en el bar (museo) — son el contenido ideal y con derechos para la galería del museo digital. Para los retratos de la home/`sobre-eric`, usar la foto de Commons (con atribución) o una sesión propia.

---

## 🔧 Instrucciones de Uso

### Midjourney
- Usa los prompts tal cual; añade `--ar 16:9` (hero/eventos), `--ar 1:1` (tapas/museo), `--ar 4:5` (retratos).
- `--style raw` para mayor control fotográfico; `--seed 12345` para variaciones consistentes.

### DALL·E 3
- Simplifica las especificaciones técnicas de píxeles; mantén estilo, escena y paleta HEX.

### Stable Diffusion / otros
- Divide prompts largos; genera a mayor resolución y redimensiona; refuerza los HEX cuando el color sea crítico.

---

## 💡 Consejos

1. **Consistencia de paleta:** negro `#1a1a1a` + dorado `#FFD700` + rojo `#8B0000` en todas las piezas.
2. **Coherencia de museo:** las fotos de galería en **blanco y negro / sepia** con grano de película.
3. **Tapas apetecibles** sobre fondo oscuro y madera, luz cálida.
4. **Respeto y derechos:** priorizar fotos reales cedidas por Eric o con licencia libre; citar autoría.
5. **Optimización web:** exportar en **WebP**, usar `next/image`, tamaños ≤ 200 KB cuando sea posible.

---

**Generado para:** El Bar de Eric — *Donde la música se hace tapa*
**Fecha:** Junio 2026
**Versión:** 1.0
