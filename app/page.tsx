
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import InstitutionsSection from "@/components/institutions-section";
import Navbar from "@/components/navbar";
import OurMission from "@/components/our-mission";
import TalkToUs from "@/components/talk-to-us";
import Testimony from "@/components/testimony";
import { depoimentoMock } from "@/data/depoimentos";
import { instituicoesMock } from "@/data/instituicoes";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#003845]">
      <Navbar />
      <Hero />
      <InstitutionsSection instituicoes={instituicoesMock} />
      <OurMission/>
      <Testimony depoimento={depoimentoMock}/>
      <TalkToUs/>
      <Footer/>
    </main>
  );
}