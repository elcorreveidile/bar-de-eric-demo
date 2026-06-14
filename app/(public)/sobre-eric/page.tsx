import Link from "next/link";

export const metadata = {
  title: "Sobre Eric",
};

const bandas = [
  {
    nombre: "KGB",
    periodo: "1982-1988",
    descripcion:
      "La primera banda de Eric. Punk y rock alternativo en la Granada de los 80. Una de las formaciones pioneras de la escena granadina.",
  },
  {
    nombre: "Lagartija Nick",
    periodo: "1985-presente",
    descripcion:
      "La banda que cambio el rock espanol. Con discos como Inercia y la colaboracion historica con Enrique Morente en Omega, Lagartija Nick llevo el rock granadino al mundo.",
  },
  {
    nombre: "Los Planetas",
    periodo: "1993-presente",
    descripcion:
      "Eric se une como bateria a Los Planetas, la banda que definio el indie espanol. Juntos crearon algunos de los discos mas importantes del rock en castellano.",
  },
  {
    nombre: "Los Evangelistas",
    periodo: "2007-presente",
    descripcion:
      "Proyecto paralelo donde Eric explora nuevos territorios sonoros sin abandonar la esencia del rock granadino.",
  },
];

export default function SobreEricPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        <div className="md:col-span-1">
          <div className="aspect-[3/4] bg-negro-light rounded-xl flex items-center justify-center border border-gris/20 sticky top-24">
            <span className="text-gris-light text-sm">Foto de Eric</span>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-dorado mb-4">
              Eric Jimenez
            </h1>
            <p className="text-gris-light text-lg leading-relaxed">
              Bateria, escritor, documentalista y hostelero. Eric Jimenez es
              una de las figuras fundamentales del rock espanol. Desde sus
              inicios con KGB en 1982 hasta la apertura de su bar-museo en
              2013, su vida ha estado marcada por la musica, la cultura y
              Granada.
            </p>
          </div>

          <div>
            <p className="text-gris-light leading-relaxed">
              Nacido en Granada, Eric comenzo su carrera musical a principios
              de los 80 con KGB. Pronto se unio a Lagartija Nick, donde
              participo en la creacion de Omega junto a Enrique Morente, un
              disco que fusiono flamenco y rock y cambio la musica espanola.
              Como bateria de Los Planetas, contribuyo a definir el sonido
              del indie espanol. Durante mas de 20 anos fue reconocido como
              el mejor bateria de Espana.
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
            <p className="text-gris-light text-sm mt-2 leading-relaxed">
              Memorias de un bateria que ha vivido la historia del rock
              espanol desde dentro. Un relato en primera persona de cuatro
              decadas de musica.
            </p>
          </div>
          <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
            <h3 className="font-display text-lg font-semibold text-white">
              Viaje al centro de mi cerebro
            </h3>
            <p className="text-gris-light text-sm mt-2 leading-relaxed">
              Un viaje introspectivo a traves de la musica, la creatividad y
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
            La importancia de llamarse Ernesto...
          </h3>
          <p className="text-gris-light text-sm mt-2 leading-relaxed">
            Documental que recorre la vida y carrera de Eric Jimenez, desde
            los escenarios hasta detras de la barra de su bar. Una pelicula
            sobre musica, amistad y la Granada que suena a rock.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-dorado mb-6">
          Premios y Reconocimientos
        </h2>
        <div className="bg-negro-light rounded-lg p-5 border border-gris/20">
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center border border-dorado/30">
              <span className="font-display text-2xl font-bold text-dorado">
                20
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                20 anos Premio Mejor Bateria espanol
              </h3>
              <p className="text-gris-light text-sm mt-1">
                Reconocido durante dos decadas consecutivas como el mejor
                bateria de Espana por la critica y el publico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
