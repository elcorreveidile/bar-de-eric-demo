// =============================================================================
// GENERADOR DE IMÁGENES PLACEHOLDER — El Bar de Eric
// -----------------------------------------------------------------------------
// ⚠️  PLACEHOLDERS. Todas las imágenes que produce este script son temporales.
//     Deben REEMPLAZARSE por las fotografías reales de Eric Jiménez / del bar
//     en preproducción, una vez tengamos su permiso. Ver public/images/README.md
//     y docs/IMAGENES_PROMPTS.md.
// =============================================================================

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(process.cwd(), "public", "images");

const NEGRO = "#1a1a1a";
const NEGRO_LIGHT = "#2a2a2a";
const DORADO = "#FFD700";
const DORADO_DARK = "#B8860B";
const ROJO = "#8B0000";
const GRIS = "#9CA3AF";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function write(dir, name, svg) {
  mkdirSync(join(ROOT, dir), { recursive: true });
  writeFileSync(join(ROOT, dir, name), svg.trim() + "\n", "utf8");
}

// Defs comunes: grano sutil + viñeta
function defs(id) {
  return `
  <defs>
    <radialGradient id="vig-${id}" cx="50%" cy="42%" r="75%">
      <stop offset="0%" stop-color="${NEGRO_LIGHT}"/>
      <stop offset="100%" stop-color="${NEGRO}"/>
    </radialGradient>
    <filter id="grain-${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>`;
}

const PLACEHOLDER_TAG =
  `<!-- PLACEHOLDER: reemplazar por imagen real de Eric / del bar en preproducción -->`;

// Motivos vectoriales (silueta) reutilizables, centrados en un viewBox 0..100
const MOTIVOS = {
  // batería / concierto
  concierto: (c) => `
    <g fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round">
      <ellipse cx="50" cy="62" rx="22" ry="7"/>
      <line x1="34" y1="62" x2="30" y2="80"/><line x1="66" y1="62" x2="70" y2="80"/>
      <circle cx="34" cy="46" r="9"/><circle cx="66" cy="46" r="9"/>
      <line x1="40" y1="40" x2="58" y2="34"/><line x1="60" y1="40" x2="42" y2="34"/>
    </g>`,
  // estudio / micrófono
  estudio: (c) => `
    <g fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round">
      <rect x="44" y="28" width="12" height="24" rx="6"/>
      <path d="M38 46 a12 12 0 0 0 24 0"/>
      <line x1="50" y1="58" x2="50" y2="70"/><line x1="42" y1="70" x2="58" y2="70"/>
    </g>`,
  // personaje / retrato
  personajes: (c) => `
    <g fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round">
      <circle cx="50" cy="42" r="11"/>
      <path d="M32 72 c0 -14 12 -20 18 -20 s18 6 18 20"/>
    </g>`,
  // memento / vinilo
  mementos: (c) => `
    <g fill="none" stroke="${c}" stroke-width="2">
      <circle cx="50" cy="50" r="22"/><circle cx="50" cy="50" r="9"/><circle cx="50" cy="50" r="2.5" fill="${c}"/>
    </g>`,
  // nota musical (genérico tapa/menu)
  nota: (c) => `
    <g fill="${c}">
      <path d="M58 30 v26 a8 7 0 1 1 -5 -6 V40 l-14 4 v18 a8 7 0 1 1 -5 -6 V36 z"/>
    </g>`,
  // guitarra / guía
  guitarra: (c) => `
    <g fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round">
      <circle cx="44" cy="60" r="14"/><circle cx="44" cy="60" r="5"/>
      <line x1="55" y1="49" x2="72" y2="30"/><rect x="68" y="24" width="9" height="9" rx="2"/>
    </g>`,
  // copa / evento
  copa: (c) => `
    <g fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round">
      <path d="M38 30 h24 l-3 14 a9 9 0 0 1 -18 0 z"/>
      <line x1="50" y1="53" x2="50" y2="70"/><line x1="42" y1="70" x2="58" y2="70"/>
    </g>`,
};

// Imagen "foto" genérica con marco de museo + motivo + etiqueta
function fotoSVG({ id, w = 1000, h = 1000, motivo = "nota", accent = DORADO, label = "", sub = "" }) {
  const m = MOTIVOS[motivo] || MOTIVOS.nota;
  const mx = w / 2, my = h / 2 - h * 0.04;
  const scale = Math.min(w, h) / 100 * 0.78;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label || "placeholder")}">
  ${PLACEHOLDER_TAG}
  ${defs(id)}
  <rect width="${w}" height="${h}" fill="url(#vig-${id})"/>
  <rect width="${w}" height="${h}" filter="url(#grain-${id})" opacity="0.5"/>
  <rect x="${w*0.06}" y="${h*0.06}" width="${w*0.88}" height="${h*0.88}" fill="none" stroke="${accent}" stroke-opacity="0.25" stroke-width="${Math.max(2,w*0.004)}"/>
  <g transform="translate(${mx - 50*scale}, ${my - 50*scale}) scale(${scale})" opacity="0.85">${m(accent)}</g>
  ${label ? `<text x="${w/2}" y="${h*0.82}" text-anchor="middle" font-family="Georgia, 'Playfair Display', serif" font-size="${w*0.05}" fill="#ededed">${esc(label)}</text>` : ""}
  ${sub ? `<text x="${w/2}" y="${h*0.88}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${w*0.032}" fill="${GRIS}">${esc(sub)}</text>` : ""}
</svg>`;
}

// ---------------------------------------------------------------------------
// 1) LOGO
// ---------------------------------------------------------------------------
function logoHorizontal() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400" role="img" aria-label="El Bar de Eric">
  ${PLACEHOLDER_TAG}
  <rect width="1200" height="400" fill="${NEGRO}"/>
  <g transform="translate(120 200)">
    <g stroke="${DORADO}" stroke-width="10" stroke-linecap="round">
      <line x1="-20" y1="-70" x2="40" y2="-30"/><line x1="40" y1="-70" x2="-20" y2="-30"/>
      <circle cx="10" cy="35" r="38" fill="none"/><circle cx="10" cy="35" r="6" fill="${DORADO}"/>
    </g>
  </g>
  <text x="250" y="190" font-family="Georgia, 'Playfair Display', serif" font-weight="700" font-size="92" fill="${DORADO}">El Bar de Eric</text>
  <text x="252" y="250" font-family="Inter, Arial, sans-serif" font-size="34" letter-spacing="2" fill="#ededed">Donde la música se hace tapa</text>
  <rect x="252" y="278" width="120" height="6" fill="${ROJO}"/>
</svg>`;
}
function logoSquare() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="El Bar de Eric">
  ${PLACEHOLDER_TAG}
  <rect width="512" height="512" rx="48" fill="${NEGRO}"/>
  <rect x="20" y="20" width="472" height="472" rx="32" fill="none" stroke="${DORADO}" stroke-opacity="0.35" stroke-width="6"/>
  <g transform="translate(256 220)" stroke="${DORADO}" stroke-width="16" stroke-linecap="round">
    <line x1="-60" y1="-70" x2="60" y2="-10"/><line x1="60" y1="-70" x2="-60" y2="-10"/>
    <circle cx="0" cy="40" r="70" fill="none"/><circle cx="0" cy="40" r="12" fill="${DORADO}"/>
  </g>
  <text x="256" y="430" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="54" fill="${DORADO}">Eric</text>
</svg>`;
}

// ---------------------------------------------------------------------------
// 2) FONDOS / TEXTURAS
// ---------------------------------------------------------------------------
function fondoTexturaGlobal() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  ${PLACEHOLDER_TAG}
  <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.04"/></feComponentTransfer></filter></defs>
  <rect width="600" height="600" fill="${NEGRO}"/>
  <rect width="600" height="600" filter="url(#n)"/>
</svg>`;
}
function fondoPatronVinilos() {
  const one = (x, y) => `<g transform="translate(${x} ${y})" fill="none" stroke="${DORADO}" stroke-opacity="0.06" stroke-width="2"><circle r="34"/><circle r="14"/><circle r="3" fill="${DORADO}" fill-opacity="0.06" stroke="none"/></g>`;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  ${PLACEHOLDER_TAG}
  <rect width="300" height="300" fill="${NEGRO}"/>
  ${one(75, 75)}${one(225, 75)}${one(150, 150)}${one(75, 225)}${one(225, 225)}
</svg>`;
}
function fondoHeroCollage() {
  let frames = "";
  const cols = 8, rows = 5, gw = 1920 / cols, gh = 1080 / rows;
  let i = 0;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const x = c * gw + 12, y = r * gh + 12, w = gw - 24, h = gh - 24;
    const accent = i % 5 === 0 ? ROJO : DORADO;
    frames += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${NEGRO_LIGHT}" fill-opacity="0.5" stroke="${accent}" stroke-opacity="0.12" stroke-width="2"/>`;
    i++;
  }
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  ${PLACEHOLDER_TAG}
  <defs><radialGradient id="hv" cx="35%" cy="45%" r="80%"><stop offset="0%" stop-color="${NEGRO_LIGHT}"/><stop offset="100%" stop-color="${NEGRO}"/></radialGradient></defs>
  <rect width="1920" height="1080" fill="url(#hv)"/>
  ${frames}
  <rect width="1920" height="1080" fill="${NEGRO}" opacity="0.55"/>
</svg>`;
}
function fondoSimple({ name, w, h, base, accent, label }) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${PLACEHOLDER_TAG}
  <defs><radialGradient id="g-${name}" cx="50%" cy="50%" r="75%"><stop offset="0%" stop-color="${base}"/><stop offset="100%" stop-color="${NEGRO}"/></radialGradient>
  <filter id="nb-${name}"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer></filter></defs>
  <rect width="${w}" height="${h}" fill="url(#g-${name})"/>
  <rect width="${w}" height="${h}" filter="url(#nb-${name})"/>
  <rect x="0" y="${h-6}" width="${w}" height="6" fill="${accent}" opacity="0.4"/>
</svg>`;
}
function fondoDivisor() {
  let bars = "";
  for (let x = 0; x < 1920; x += 16) {
    const hh = 10 + (Math.sin(x * 0.05) * 0.5 + 0.5) * 90;
    bars += `<rect x="${x}" y="${(120 - hh) / 2}" width="8" height="${hh}" fill="${DORADO}" opacity="0.5"/>`;
  }
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="120" viewBox="0 0 1920 120">
  ${PLACEHOLDER_TAG}
  <rect width="1920" height="120" fill="none"/>
  ${bars}
</svg>`;
}

// ---------------------------------------------------------------------------
// 3) ICONOS UI
// ---------------------------------------------------------------------------
function icono(name, inner) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="${name}">
  ${PLACEHOLDER_TAG}
  <g fill="none" stroke="${DORADO}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
</svg>`;
}
const ICONOS = {
  museo: `<rect x="40" y="50" width="120" height="90" rx="6"/><circle cx="78" cy="84" r="12"/><path d="M48 132 l34 -34 24 22 26 -30 24 22"/>`,
  menu: `<ellipse cx="100" cy="110" rx="58" ry="20"/><path d="M100 90 v-40 a8 7 0 1 1 -5 6"/>`,
  programacion: `<rect x="44" y="52" width="112" height="100" rx="8"/><line x1="44" y1="78" x2="156" y2="78"/><line x1="74" y1="40" x2="74" y2="60"/><line x1="126" y1="40" x2="126" y2="60"/><path d="M110 120 l-16 -10 v20 z" fill="${DORADO}" stroke="none"/>`,
  guia: `<path d="M100 40 c26 0 40 18 40 40 c0 30 -40 80 -40 80 s-40 -50 -40 -80 c0 -22 14 -40 40 -40z"/><path d="M92 86 v-20 a6 5 0 1 1 -4 4"/>`,
  reservas: `<rect x="50" y="96" width="100" height="14" rx="4"/><line x1="62" y1="110" x2="62" y2="150"/><line x1="138" y1="110" x2="138" y2="150"/><path d="M64 96 v-18 a36 18 0 0 1 72 0 v18"/>`,
  pedidos: `<path d="M62 70 h76 l-8 80 a6 6 0 0 1 -6 6 H76 a6 6 0 0 1 -6 -6 z"/><path d="M80 70 a20 20 0 0 1 40 0"/><circle cx="100" cy="118" r="14"/><circle cx="100" cy="118" r="3" fill="${DORADO}" stroke="none"/>`,
};

// ---------------------------------------------------------------------------
// 4) MUSEO (20), 5) MENU (15), 6) EVENTOS (4), retrato, fachada, og
// ---------------------------------------------------------------------------
const CAT_MOTIVO = { Conciertos: "concierto", Estudio: "estudio", Personajes: "personajes", Mementos: "mementos" };
// Orden alineado con los ids de los componentes/seed
const MUSEO_CATS = ["Personajes","Conciertos","Estudio","Conciertos","Personajes","Conciertos","Mementos","Estudio","Mementos","Conciertos","Personajes","Mementos","Conciertos","Estudio","Personajes","Mementos","Conciertos","Estudio","Personajes","Mementos"];

function og() {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="El Bar de Eric">
  ${PLACEHOLDER_TAG}
  <defs><radialGradient id="ogv" cx="30%" cy="40%" r="90%"><stop offset="0%" stop-color="${NEGRO_LIGHT}"/><stop offset="100%" stop-color="${NEGRO}"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#ogv)"/>
  ${(() => { let f=""; for(let r=0;r<4;r++)for(let c=0;c<7;c++){const x=c*171+16,y=r*157+16;f+=`<rect x="${x}" y="${y}" width="139" height="125" fill="${NEGRO_LIGHT}" fill-opacity="0.4" stroke="${DORADO}" stroke-opacity="0.1" stroke-width="2"/>`;}return f;})()}
  <rect width="1200" height="630" fill="${NEGRO}" opacity="0.6"/>
  <text x="80" y="300" font-family="Georgia, serif" font-weight="700" font-size="84" fill="${DORADO}">El Bar de Eric</text>
  <text x="84" y="360" font-family="Inter, Arial, sans-serif" font-size="34" fill="#ededed">Donde la música se hace tapa</text>
  <rect x="84" y="392" width="160" height="8" fill="${ROJO}"/>
  <text x="84" y="450" font-family="Inter, Arial, sans-serif" font-size="24" fill="${GRIS}">Bar museo del rock · Granada · desde 2013</text>
</svg>`;
}

// =============================================================================
// GENERACIÓN
// =============================================================================
write("logo", "logo-horizontal.svg", logoHorizontal());
write("logo", "logo-square.svg", logoSquare());

write("fondos", "textura-global.svg", fondoTexturaGlobal());
write("fondos", "patron-vinilos.svg", fondoPatronVinilos());
write("fondos", "hero-collage.svg", fondoHeroCollage());
write("fondos", "madera-menu.svg", fondoSimple({ name: "madera", w: 1920, h: 1080, base: "#241a12", accent: DORADO_DARK }));
write("fondos", "cartel-eventos.svg", fondoSimple({ name: "cartel", w: 1920, h: 1080, base: "#241414", accent: ROJO }));
write("fondos", "neon-reservas.svg", fondoSimple({ name: "neon", w: 1920, h: 800, base: NEGRO_LIGHT, accent: DORADO }));
write("fondos", "dashboard-textura.svg", fondoSimple({ name: "dash", w: 600, h: 600, base: NEGRO_LIGHT, accent: GRIS }));
write("fondos", "divisor.svg", fondoDivisor());

for (const [name, inner] of Object.entries(ICONOS)) write("iconos", `${name}.svg`, icono(name, inner));
// alias programacion->programacion, guia, reservas, pedidos already covered

for (let i = 1; i <= 20; i++) {
  const cat = MUSEO_CATS[i - 1] || "Conciertos";
  write("museo", `foto-${i}.svg`, fotoSVG({ id: `mu${i}`, w: 1000, h: 1000, motivo: CAT_MOTIVO[cat], accent: i % 5 === 0 ? ROJO : DORADO, label: cat }));
}

const TAPAS = ["Inercia","Omega","Qué Puedo Hacer","Pop","Keith Moon","Un Buen Día","Lagartija","Joe Strummer","091","Los Evangelistas","Lux Interior","Sonic Youth","Patti Smith","Satisfaction","London Calling"];
TAPAS.forEach((t, idx) => {
  write("menu", `tapa-${idx + 1}.svg`, fotoSVG({ id: `ta${idx + 1}`, w: 800, h: 800, motivo: idx % 3 === 0 ? "copa" : "nota", accent: DORADO, label: t, sub: "tapa musical" }));
});

const EVENTOS = [["concierto","concierto"],["exposicion","mementos"],["guia-rockera","guitarra"],["taller","estudio"]];
EVENTOS.forEach(([name, motivo]) => {
  write("eventos", `${name}.svg`, fotoSVG({ id: `ev-${name}`, w: 1200, h: 630, motivo, accent: name === "exposicion" ? ROJO : DORADO, label: name.replace("-", " ") }));
});

write("equipo", "eric.svg", fotoSVG({ id: "eric", w: 800, h: 1000, motivo: "concierto", accent: DORADO, label: "Eric Jiménez", sub: "batería" }));
write("ubicacion", "fachada.svg", fotoSVG({ id: "fachada", w: 1200, h: 800, motivo: "copa", accent: DORADO, label: "El Bar de Eric", sub: "Calle Escuelas 8, Granada" }));
write("og", "og-image.svg", og());

console.log("✅ Placeholders generados en public/images/ (RECORDATORIO: reemplazar por imágenes reales en preproducción)");
