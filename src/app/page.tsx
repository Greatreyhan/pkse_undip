import Departement from "@/components/Departement";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Kabinet from "@/components/Kabinet";
import VisMis from "@/components/VisMis";

export default function Home() {
  return (
    <main id="home" >
      <Hero />
      <Kabinet />
      <VisMis />
      <Departement />
      <Gallery />
    </main>
  );
}
