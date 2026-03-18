'use client'
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[calc(100vh-82px)] min-h-[560px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.png"
          alt="Fachada de faculdade brasileira com bandeiras do Brasil e São Paulo"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <h1 className="text-white font-extrabold text-5xl md:text-6xl leading-tight mb-4">
            Encontre a{" "}
            <span className="text-[#00E5FF]">instituição</span>
            <br />
            <span className="text-[#00E5FF]">ideal</span> para você.
          </h1>

          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-sm">
            Compare faculdades, institutos e cursos técnicos de todo o Brasil.
          </p>
        </div>
      </div>

    {/* Scroll down button */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div className="relative">
        <span className="absolute inset-0 rounded-2xl bg-[#00BCD4] animate-ping opacity-75" />
        
        <button
          aria-label="Rolar para baixo"
          onClick={() => document.getElementById("instituicoes")?.scrollIntoView({ behavior: "smooth" })}
          className="relative w-12 h-12 rounded-2xl bg-[#00BCD4] flex items-center justify-center shadow-lg hover:bg-[#00ACC1] transition-colors"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    </section>
  );
}