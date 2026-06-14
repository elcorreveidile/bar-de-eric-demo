import { HeroSection } from "@/components/home/HeroSection";
import { MuseoDinamico } from "@/components/home/MuseoDinamico";
import { MenuPreview } from "@/components/home/MenuPreview";
import { EventosDestacados } from "@/components/home/EventosDestacados";
import { SobreEric } from "@/components/home/SobreEric";
import { UbicacionHorarios } from "@/components/home/UbicacionHorarios";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MuseoDinamico />
      <MenuPreview />
      <EventosDestacados />
      <SobreEric />
      <UbicacionHorarios />
    </>
  );
}
