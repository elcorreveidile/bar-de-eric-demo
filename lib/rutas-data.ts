export interface Parada {
  nombre: string;
  descripcion: string;
  lat: number;
  lng: number;
}

export interface Ruta {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  duracion: string;
  distancia: string;
  color: string;
  fondo: string;
  paradas: Parada[];
}

export const rutas: Ruta[] = [
  {
    slug: "joe-strummer",
    titulo: "Joe Strummer en Granada",
    subtitulo: "Tras los pasos del líder de The Clash (1984-1985)",
    descripcion:
      "Joe Strummer llegó a Granada en octubre de 1984 buscando desconectar tras la disolución de The Clash. Se instaló en el Albaicín y se sumergió en la vida de la ciudad, frecuentando bares, descubriendo a 091 y forjando lazos con la escena local. Esta ruta recorre los lugares que marcaron su estancia granadina.",
    duracion: "2 horas",
    distancia: "3,5 km",
    color: "#E8313F",
    fondo: "/images/fondos/background-ruta-joe.png",
    paradas: [
      {
        nombre: "El Bar de Eric",
        descripcion:
          "Punto de partida. El bar-museo donde se conservan fotos y recuerdos del paso de Strummer por Granada. Eric Jiménez, batería de Los Planetas y Lagartija Nick, guarda memorabilia de aquella época.",
        lat: 37.1783,
        lng: -3.6008,
      },
      {
        nombre: "Placeta Joe Strummer",
        descripcion:
          "Plaza inaugurada en 2013 en el Realejo, dedicada al músico por iniciativa popular. Su viuda Lucinda Tait asistió a la ceremonia junto a cientos de fans. Esquina de Cuesta de Escoriaza con Vistillas de los Ángeles.",
        lat: 37.1735,
        lng: -3.5918,
      },
      {
        nombre: "Mirador de San Nicolás",
        descripcion:
          "El mirador más famoso de Granada, con vistas a la Alhambra. Strummer solía subir aquí al atardecer. Un lugar que aparece en muchas de las fotografías de su época granadina.",
        lat: 37.1812,
        lng: -3.5927,
      },
      {
        nombre: "Plaza Larga (Albaicín)",
        descripcion:
          "Centro neurálgico del Albaicín, donde Strummer pasaba las tardes tomando cervezas y absorbiendo la vida del barrio. Aquí preguntó por primera vez por la banda local 091.",
        lat: 37.1825,
        lng: -3.5920,
      },
      {
        nombre: "Bar El Silbar (Pedro Antonio de Alarcón, 63)",
        descripcion:
          "El bar donde se congregaba la escena rockera granadina de los 80. Strummer terminó aquí tras preguntar por 091 en el Albaicín. Punto de encuentro de todo el que era alguien en el rock de Granada.",
        lat: 37.1731,
        lng: -3.6041,
      },
      {
        nombre: "Restaurante Juanillo (Sacromonte)",
        descripcion:
          "En el corazón del Sacromonte, donde Strummer concedió una entrevista a la prensa local en noviembre de 1984. Un lugar con vistas a la Alhambra y ambiente flamenco.",
        lat: 37.1790,
        lng: -3.5835,
      },
      {
        nombre: "Paseo de los Tristes",
        descripcion:
          "El paseo junto al río Darro, bajo la Alhambra. Uno de los rincones favoritos de Strummer para pasear por las noches granadinas, entre las cuevas del Sacromonte y el Albaicín.",
        lat: 37.1788,
        lng: -3.5878,
      },
      {
        nombre: "Plaza Nueva",
        descripcion:
          "La plaza que conecta el centro con el Albaicín. Punto de paso obligado en las noches granadinas de Strummer, con sus bares y terrazas al pie de la colina de la Alhambra.",
        lat: 37.1770,
        lng: -3.5912,
      },
    ],
  },
  {
    slug: "enrique-morente",
    titulo: "Huellas de Enrique Morente",
    subtitulo: "El genio que fusionó flamenco y rock (1942-2010)",
    descripcion:
      "Enrique Morente nació en el Albaicín el 25 de diciembre de 1942 y transformó el flamenco para siempre. Con Omega (1996), junto a Lagartija Nick, rompió todas las fronteras entre géneros. Esta ruta recorre los lugares esenciales de su vida y legado en Granada.",
    duracion: "2,5 horas",
    distancia: "4 km",
    color: "#D4A017",
    fondo: "/images/fondos/background-ruta-morente.png",
    paradas: [
      {
        nombre: "El Bar de Eric",
        descripcion:
          "Punto de partida. Eric Jiménez fue el batería de Lagartija Nick en la grabación de Omega. El bar conserva fotografías y recuerdos de Morente.",
        lat: 37.1783,
        lng: -3.6008,
      },
      {
        nombre: "Casa natal de Morente (Cuesta de San Gregorio, 5)",
        descripcion:
          "Aquí nació Enrique Morente en 1942, en el corazón del Albaicín. La Asociación de Vecinos del Bajo Albaicín colocó una placa conmemorativa en su fachada.",
        lat: 37.1805,
        lng: -3.5910,
      },
      {
        nombre: "Peña La Platería",
        descripcion:
          "Fundada en 1949 en la Placeta de Toqueros, es la peña flamenca más antigua del mundo. Morente cantó aquí innumerables veces y es uno de los templos del flamenco granadino.",
        lat: 37.1815,
        lng: -3.5935,
      },
      {
        nombre: "Mirador de San Nicolás",
        descripcion:
          "Morente amaba este lugar. Desde aquí se ve la Alhambra que inspiró tantas letras. Tras su muerte en 2010, fans y artistas se reunieron aquí para rendirle homenaje.",
        lat: 37.1812,
        lng: -3.5927,
      },
      {
        nombre: "Plaza de las Pasiegas (Catedral)",
        descripcion:
          "La Catedral de Granada, junto a la cual Morente creció escuchando las campanas que luego incorporaría a su música. Un punto central de la Granada que le vio crecer.",
        lat: 37.1760,
        lng: -3.5985,
      },
      {
        nombre: "Teatro Isabel la Católica",
        descripcion:
          "Escenario de muchos de los conciertos memorables de Morente en Granada. Aquí presentó obras que desafiaban los límites del flamenco tradicional.",
        lat: 37.1752,
        lng: -3.5955,
      },
      {
        nombre: "Sacromonte",
        descripcion:
          "El barrio gitano de Granada, cuna del flamenco. Morente frecuentaba las zambras de las cuevas y mantuvo siempre una conexión profunda con esta comunidad.",
        lat: 37.1795,
        lng: -3.5845,
      },
      {
        nombre: "Paseo de los Tristes",
        descripcion:
          "Escenario de noches flamencas improvisadas. Morente solía pasear por aquí, entre el Albaicín y el Sacromonte, los dos barrios que definieron su arte.",
        lat: 37.1788,
        lng: -3.5878,
      },
      {
        nombre: "Plaza Nueva",
        descripcion:
          "Tras la muerte de Morente el 13 de diciembre de 2010, miles de granadinos se concentraron espontáneamente en esta plaza para despedirlo con música y aplausos.",
        lat: 37.1770,
        lng: -3.5912,
      },
      {
        nombre: "Cementerio de San José",
        descripcion:
          "Último reposo de Enrique Morente, en el cementerio situado en la ladera de la Alhambra. Un lugar de peregrinación para los amantes del flamenco.",
        lat: 37.1778,
        lng: -3.5860,
      },
    ],
  },
  {
    slug: "escena-indie",
    titulo: "La escena indie granadina",
    subtitulo: "De 091 a Los Planetas: cuatro décadas de rock",
    descripcion:
      "Granada es la cuna del rock alternativo español. Desde los años 80 con 091 y Lagartija Nick, pasando por Los Planetas, Lori Meyers y Niños Mutantes, esta ciudad ha producido más bandas influyentes por metro cuadrado que ninguna otra en España. Esta ruta recorre los locales, salas y rincones que lo hicieron posible.",
    duracion: "3 horas",
    distancia: "5 km",
    color: "#8B5CF6",
    fondo: "/images/fondos/background-ruta-indie.png",
    paradas: [
      {
        nombre: "El Bar de Eric",
        descripcion:
          "Punto de partida y epicentro de la historia del rock granadino. 170 fotografías, instrumentos, entradas y objetos que recorren cuatro décadas de música. Un museo vivo del rock español.",
        lat: 37.1783,
        lng: -3.6008,
      },
      {
        nombre: "Sala Planta Baja (Horno de Abad, 11)",
        descripcion:
          "La sala de conciertos por excelencia de Granada, fundada en 1983 en la calle Obispo Hurtado y trasladada aquí en 1989. Por su escenario han pasado todas las bandas de la escena granadina y nacional. Aforo para 300 personas.",
        lat: 37.1745,
        lng: -3.5985,
      },
      {
        nombre: "Facultad de Ciencias (Campus Fuentenueva)",
        descripcion:
          "En los locales de ensayo cercanos a la universidad, 091, Lagartija Nick y otras bandas dieron sus primeros pasos. Los miembros de 091 y Los Planetas eran estudiantes aquí.",
        lat: 37.1800,
        lng: -3.6100,
      },
      {
        nombre: "Plaza de Gracia",
        descripcion:
          "Zona de bares y vida nocturna donde se fraguó la escena indie de los 90. Los músicos de Los Planetas, Lagartija Nick y Niños Mutantes coincidían aquí noche tras noche.",
        lat: 37.1755,
        lng: -3.5970,
      },
      {
        nombre: "Bar El Silbar (Pedro Antonio de Alarcón, 63)",
        descripcion:
          "El cuartel general del rock granadino en los 80. Aquí se reunían 091 y toda la primera generación de bandas. Joe Strummer los descubrió en este bar.",
        lat: 37.1731,
        lng: -3.6041,
      },
      {
        nombre: "Calle Elvira",
        descripcion:
          "La arteria de la vida nocturna granadina. Teterías, bares y locales donde las bandas se encontraban después de los ensayos. Escenario de innumerables noches de rock.",
        lat: 37.1775,
        lng: -3.5952,
      },
      {
        nombre: "Plaza del Carmen (Ayuntamiento)",
        descripcion:
          "Escenario de conciertos al aire libre y celebraciones musicales. Aquí se han celebrado homenajes a las bandas granadinas y festivales urbanos.",
        lat: 37.1755,
        lng: -3.5995,
      },
      {
        nombre: "Estadio Los Cármenes / Palacio de Deportes",
        descripcion:
          "Sede del Festival Zaidín Rock, uno de los festivales más veteranos de España (desde 1980). 091, Lagartija Nick, Los Planetas y todas las grandes bandas granadinas han tocado aquí.",
        lat: 37.1560,
        lng: -3.6065,
      },
      {
        nombre: "Barrio del Realejo",
        descripcion:
          "Barrio bohemio donde viven muchos músicos de la escena. Sus bares y plazas han sido escenario de jam sessions y conciertos improvisados. Aquí está también la Placeta Joe Strummer.",
        lat: 37.1735,
        lng: -3.5918,
      },
      {
        nombre: "Paseo del Salón",
        descripcion:
          "Paseo arbolado junto al río Genil, escenario de conciertos al aire libre y punto de encuentro generacional. Aquí se celebran festivales y eventos musicales cada verano.",
        lat: 37.1720,
        lng: -3.5935,
      },
      {
        nombre: "Plaza de Toros de Granada",
        descripcion:
          "Escenario de los grandes conciertos de rock en Granada. Miguel Ríos, otro granadino ilustre, llenó este recinto. 091 se despidieron aquí ante miles de fans.",
        lat: 37.1680,
        lng: -3.6010,
      },
      {
        nombre: "Parque Federico García Lorca",
        descripcion:
          "Dedicado al poeta granadino más universal. La conexión entre la poesía de Lorca y el rock granadino es un hilo que une toda la escena: de Morente a Los Planetas, todos han bebido de su legado.",
        lat: 37.1695,
        lng: -3.5855,
      },
    ],
  },
];
