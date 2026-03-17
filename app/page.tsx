import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#003845]">
      <Navbar />
      <Hero />
    </main>
  );
}