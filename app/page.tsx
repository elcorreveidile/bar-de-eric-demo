import { HeroSection } from "@/components/home/HeroSection";
import { MuseoDinamico } from "@/components/home/MuseoDinamico";
import { MenuPreview } from "@/components/home/MenuPreview";
import { EventosDestacados } from "@/components/home/EventosDestacados";
import { SobreEric } from "@/components/home/SobreEric";
import { UbicacionHorarios } from "@/components/home/UbicacionHorarios";

export default function Home() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 hero-bg"
        style={{
          backgroundImage: "url('/images/bar-real/neon-fachada.jpg')",
          backgroundSize: "cover",
          transform: "scaleX(-1)",
        }}
      />
      <div className="fixed inset-0 -z-10 bg-negro/60" />
      <HeroSection />
      <MuseoDinamico />
      <MenuPreview />
      <EventosDestacados />
      <SobreEric />
      <UbicacionHorarios />
    </>
  );
}
