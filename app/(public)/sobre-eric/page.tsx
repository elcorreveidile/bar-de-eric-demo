
export const metadata = {
  title: "Sobre Eric",
};

const bandas = [
  {
    nombre: "KGB",
    periodo: "1982-1985",
    descripcion:
      "La primera banda de Eric. Punk crudo en la Granada de los 80, con Paco Cara, José Ángel Ruiz y Maroto. Publicaron el single Treblinka/Luftwaffe (DRO, 1983) y participaron en la mítica compilación Punk Qué? Punk.",
  },
  {
    nombre: "Lagartija Nick",
    periodo: "1985-presente",
    descripcion:
      "La banda que cambió el rock español. Discos fundamentales como Inercia (1992), Su (1995) y la colaboración histórica con Enrique Morente en Omega (1996), que fusionó flamenco y rock y transformó la música española para siempre.",
  },
  {
    nombre: "Los Planetas",
    periodo: "1998-presente",
    descripcion:
      "Eric se incorpora como batería en el tercer disco, Una semana en el motor de un autobús, y se convierte en miembro permanente de la banda que definió el indie español.",
  },
  {
    nombre: "Napoleón Solo",
    periodo: "2009-presente",
    descripcion:
      "Proyecto con Alonso Díaz, Jaime Cordones y José Ubago. Publicaron el EP Será maravilloso (2009) y el álbum Napoleón Solo en la ópera (2010).",
  },
  {
    nombre: "Los Evangelistas",
    periodo: "2007-presente",
    descripcion:
      "Proyecto paralelo donde Eric explora nuevos territorios sonoros sin abandonar la esencia del rock granadino.",
  },
];

const testimonios = [
  {
    texto:
      "Mi experiencia como cliente en el bar de Eric fue muy grata. Nos atendió Eric personalmente y demostró ser un anfitrión súper correcto, profesional, amable y atento al cliente. Nunca antes había tenido una experiencia en la hostelería como cliente de un profesional de la industria musical y me gustó mucho por mostrarme a una persona que además de ser un excelente batería, se esfuerza por tener un bar original abierto en su ciudad, en ser buen anfitrión y en dar lo mejor que puede a sus clientes.",
    titulo: "Servicio amable, correcto y experiencia entrañable e inspiradora",
    fecha: "Mayo 2021",
    estrellas: 5,
  },
  {
    texto:
      "Es una experiencia inolvidable que un músico como Eric esté sirviéndote unas cañas con esa simpatía que siempre le ha caracterizado. El lugar es muy original y acogedor. Es un pequeño templo que sirve como homenaje a la música, en la que destacan las paredes llenas de fotos de cantantes y artistas, todo ello, con una banda sonora de sonido ambiente en el que predomina el rock.",
    titulo: "Ideal para sumergirte en un mundo underground",
    fecha: "Mayo 2022",
    estrellas: 5,
  },
  {
    texto:
      "Es un bar-bistró un poco lejos del centro, llegando a la zona de las facultades, sin embargo a mí me parece que merece la pena pegarse el paseíto para ir a tomar unas cañas y si hay hambre alguna tapa. El bar está muy bien decorado, con numerosos detalles de grupos de música, en especial de Los Planetas, desde entradas, instrumentos, fotos, ropa... Si eres fan es parada obligatoria.",
    titulo: "Para los Fans de la música indie",
    fecha: "",
    estrellas: 4,
  },
];

export default function SobreEricPage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/background-eric.png')" }}
    >
    <div className="bg-negro/85 min-h-screen">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        <div className="md:col-span-1">
          {/* PLACEHOLDER: reemplazar por imagen real en preproduccion */}
          <div className="sticky top-24">
            <div
              className="relative aspect-[3/4] bg-negro-light rounded-xl overflow-hidden border border-gris/20"
              style={{
                backgroundImage: "url('/images/sobre-eric/eric-retrato.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-negro/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
              Eric Jiménez
            </h1>
            <p className="text-ambar/80 text-sm italic mb-4">
              Ernesto &ldquo;Eric&rdquo; Jiménez Linares &middot; Granada, 1967
            </p>
            <p className="text-gris-light text-lg leading-relaxed">
              Batería, escritor, hostelero y una de las figuras fundamentales
              del rock español. Desde sus inicios con KGB en 1982 hasta la
              apertura de su bar-museo en 2013, su vida ha estado marcada por
              la música, la cultura y Granada. Durante más de veinte años
              consecutivos fue reconocido como el mejor batería alternativo de
              España.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gris-light leading-relaxed">
              Eric empezó a tocar la batería de forma autodidacta en 1982 con
              KGB, banda punk pionera de la Granada de los 80. Poco después
              cofundó Lagartija Nick, donde participó en la creación de discos
              fundamentales como <span className="text-white italic">Inercia</span> (1992)
              y <span className="text-white italic">Su</span> (1995). En 1996 llegó el
              hito que cambió la música española: <span className="text-white italic">Omega</span>,
              la colaboración histórica con Enrique Morente que fusionó flamenco
              y rock de una forma que nadie había imaginado.
            </p>
            <p className="text-gris-light leading-relaxed">
              En 1998 se incorporó como batería permanente a Los Planetas,
              la banda que definió el indie español, comenzando con su tercer
              álbum <span className="text-white italic">Una semana en el motor de un
              autobús</span>. También ha formado parte de Napoleón Solo y Los
              Evangelistas, y en el año 2000 fundó una academia de batería y
              percusión en Granada.
            </p>
            <p className="text-gris-light leading-relaxed">
              En 2013, Eric y David Ramírez abrieron El Bar de Eric en la
              Calle Escuelas 8, junto a la Facultad de Derecho. Un &ldquo;Hard
              Rock Café casero&rdquo; con alma de museo: 170 fotografías que
              recorren la historia de la música en España, objetos fetiche como
              la chupa de cuero de Ana Curra, recuerdos del paso de Joe Strummer
              por Granada, memorabilia de 091, Lori Meyers, Enrique Morente...
              Un punto de encuentro donde se fusionan las tapas mediterráneas
              con la historia musical de la ciudad.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dorado mb-6">
          Bandas
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {bandas.map((banda) => (
            <div
              key={banda.nombre}
              className="bg-negro-light rounded-lg p-5 border border-gris/20"
            >
              <h3 className="font-display text-xl font-semibold text-white">
                {banda.nombre}
              </h3>
              <span className="text-dorado-dark text-sm">{banda.periodo}</span>
              <p className="text-gris-light text-sm mt-2 leading-relaxed">
                {banda.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dorado mb-6">
          Libros
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <h3 className="font-display text-lg font-semibold text-white">
              Cuatro millones de golpes
            </h3>
            <p className="text-ambar/70 text-xs mt-1">Plaza &amp; Janés, 2017 &middot; con Holden Centeno</p>
            <p className="text-gris-light text-sm mt-2 leading-relaxed">
              La insólita y emocionante historia del batería de Lagartija Nick
              y Los Planetas. Las memorias de un hombre que ha vivido al filo
              entre ganar y perder, entre la vida y la muerte, entre la música
              y la locura. Elegido mejor libro nacional de música del año por
              la revista Mondo Sonoro.
            </p>
          </div>
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <h3 className="font-display text-lg font-semibold text-white">
              Viaje al centro de mi cerebro
            </h3>
            <p className="text-gris-light text-sm mt-2 leading-relaxed">
              Un viaje introspectivo a través de la música, la creatividad y
              la vida de un artista que nunca ha dejado de explorar.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dorado mb-6">
          Documental
        </h2>
        <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
          <h3 className="font-display text-lg font-semibold text-white">
            La importancia de llamarse Ernesto y la gilipollez de llamarse Eric
          </h3>
          <p className="text-ambar/70 text-xs mt-1">Dir. César Martínez Herrada &middot; Movistar+, 2023 &middot; 1h 35min</p>
          <p className="text-gris-light text-sm mt-2 leading-relaxed mb-6">
            Documental que mezcla emoción y humor negro al ritmo de la
            batería. Cuarenta años tocando con la misma fuerza con la que la
            vida le ha golpeado. Premio del público en el Festival Dock of
            the Bay de San Sebastián de cine documental musical.
          </p>

          {/* Grid con los dos vídeos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">

            {/* TV Vintage — Documental */}
            <div className="flex flex-col items-center">
              <p className="text-gris-light text-xs mb-3 text-center italic">Tráiler del documental</p>
              <div className="relative inline-block">
                {/* Antenas */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-end gap-0">
                  <div className="w-[2px] h-10 bg-gradient-to-t from-zinc-500 to-zinc-700 rotate-[-25deg] origin-bottom rounded-full" />
                  <div className="w-[2px] h-10 bg-gradient-to-t from-zinc-500 to-zinc-700 rotate-[25deg] origin-bottom rounded-full" />
                  <div className="absolute -top-0.5 left-1/2 -translate-x-[14px] w-2 h-2 rounded-full bg-zinc-500" />
                  <div className="absolute -top-0.5 left-1/2 translate-x-[10px] w-2 h-2 rounded-full bg-zinc-500" />
                </div>

                {/* Carcasa de la TV */}
                <div className="bg-gradient-to-b from-amber-900 via-amber-950 to-stone-900 rounded-2xl p-4 pt-5 pb-7 shadow-2xl border border-amber-800/50 mt-6">
                  <div className="bg-black rounded-xl p-2 shadow-inner border border-stone-800">
                    <div className="relative rounded-lg overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                      <iframe
                        className="w-full aspect-video rounded-lg"
                        src="https://www.youtube.com/embed/zW8-nqHYlOY?si=W6w02c1nf5B9l4lz"
                        title="Documental - Tráiler"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-lg" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 px-2">
                    <div className="flex gap-[3px]">
                      {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="w-[2px] h-5 bg-stone-700 rounded-full" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-b from-stone-600 to-stone-800 border border-stone-500 shadow-inner" />
                      <div className="w-4 h-4 rounded-full bg-gradient-to-b from-stone-600 to-stone-800 border border-stone-500 shadow-inner" />
                      <div className="w-2.5 h-2.5 rounded-full bg-red-900/60 border border-red-800/50 shadow-[0_0_4px_rgba(220,38,38,0.3)]" />
                    </div>
                  </div>
                </div>
                {/* Patitas */}
                <div className="flex justify-center gap-24 -mt-1">
                  <div className="w-2.5 h-3 bg-gradient-to-b from-amber-950 to-stone-800 rounded-b-sm" />
                  <div className="w-2.5 h-3 bg-gradient-to-b from-amber-950 to-stone-800 rounded-b-sm" />
                </div>
              </div>
            </div>

            {/* SEAT 600 — Eric tocando la batería */}
            <div className="flex flex-col items-center">
              <p className="text-gris-light text-xs mb-3 text-center italic">Eric explica cómo empieza cada tema</p>
              <div className="relative inline-block w-full max-w-md">
                {/* Carrocería blanca del 600 */}
                <div className="bg-gradient-to-b from-stone-200 via-stone-100 to-stone-200 rounded-[2.5rem] rounded-b-2xl p-5 pt-6 pb-5 shadow-2xl border border-stone-300">
                  {/* Goma negra del parabrisas — borde redondeado característico */}
                  <div className="bg-stone-900 rounded-[1.2rem] p-[6px] shadow-inner">
                    {/* Cristal del parabrisas con el vídeo */}
                    <div className="relative rounded-[0.9rem] overflow-hidden">
                      <iframe
                        className="w-full aspect-video rounded-[0.9rem]"
                        src="https://www.youtube.com/embed/HGT21rM9q7U?si=b3lffn8Ps-FHjrao"
                        title="Eric tocando la batería en el 600"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                      {/* Reflejo del cristal */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[0.9rem]" />
                    </div>
                  </div>

                  {/* Limpiaparabrisas */}
                  <div className="relative h-4 mt-1">
                    <div className="absolute left-[30%] bottom-0 w-[2px] h-8 bg-stone-400 origin-bottom rotate-[35deg] rounded-full" />
                    <div className="absolute right-[30%] bottom-0 w-[2px] h-8 bg-stone-400 origin-bottom rotate-[-35deg] rounded-full" />
                    {/* Pivotes de los limpiaparabrisas */}
                    <div className="absolute left-[30%] -bottom-0.5 -translate-x-0.5 w-1.5 h-1.5 rounded-full bg-stone-500" />
                    <div className="absolute right-[30%] -bottom-0.5 -translate-x-0.5 w-1.5 h-1.5 rounded-full bg-stone-500" />
                  </div>

                  {/* Capó — parte inferior de la carrocería */}
                  <div className="flex items-center justify-center mt-1">
                    {/* Emblema SEAT */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-stone-300 to-stone-400 border-2 border-stone-400 flex items-center justify-center shadow-sm">
                      <span className="text-[5px] font-bold text-stone-600 tracking-wider">600</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl font-bold text-dorado mb-6">
          Premios y Reconocimientos
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center border border-dorado/30">
                <span className="font-display text-2xl font-bold text-dorado">
                  20
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Mejor Batería Alternativo
                </h3>
                <p className="text-gris-light text-sm mt-1">
                  Veinte años consecutivos reconocido como el mejor batería
                  alternativo de España.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center border border-dorado/30">
                <svg className="w-8 h-8 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0019.875 10.875 3.375 3.375 0 0016.5 7.5h-9a3.375 3.375 0 00-3.375 3.375A3.375 3.375 0 007.5 14.25v4.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Medalla de Plata al Mérito
                </h3>
                <p className="text-gris-light text-sm mt-1">
                  Concedida por el Ayuntamiento de Granada en 2014 por su
                  trayectoria como figura clave del rock.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center border border-dorado/30">
                <svg className="w-8 h-8 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Premio Latino de Oro 2021
                </h3>
                <p className="text-gris-light text-sm mt-1">
                  Mejor batería de grupos latinos de rock e indie.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center border border-dorado/30">
                <svg className="w-8 h-8 text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Mejor Libro de Música 2017
                </h3>
                <p className="text-gris-light text-sm mt-1">
                  Cuatro millones de golpes, elegido por la revista Mondo
                  Sonoro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-dorado mb-6">
          Lo que dicen nuestros visitantes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonios.map((t) => (
            <div
              key={t.titulo}
              className="bg-negro-light rounded-lg p-5 border border-gris/20"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < t.estrellas ? "text-green-500" : "text-gris/40"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="8" />
                  </svg>
                ))}
              </div>
              <h3 className="font-display text-sm font-semibold text-white mb-2">
                {t.titulo}
              </h3>
              {t.fecha && (
                <p className="text-ambar/60 text-xs mb-3">{t.fecha}</p>
              )}
              <p className="text-gris-light text-sm leading-relaxed line-clamp-5">
                {t.texto}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
    </div>
  );
}
