export default function OurMission() {
  const valores = [
    {
      titulo: "SIMPLICIDADE",
      descricao: "Encontre opções em segundos, sem complicações.",
      bg: "bg-black",
      textTitulo: "text-white",
      textDesc: "text-white",
    },
    {
      titulo: "PROXIMIDADE",
      descricao:
        "Faculdades e cursos perto de você, com mapas e filtros por localização exata.",
      bg: "bg-[#00BCD4]",
      textTitulo: "text-white",
      textDesc: "text-white",
    },
    {
      titulo: "SONHOS REALIZADOS",
      descricao:
        "Opções personalizadas que combinam seus interesses de gratuidade e carreira.",
      bg: "bg-[#F5A623]",
      textTitulo: "text-white",
      textDesc: "text-white",
    },
  ];

  return (
    <section id="nossa-missao" className="bg-white">
      {/* Texto superior */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-center font-black text-5xl tracking-tight text-gray-900 uppercase mb-10">
          Nossa Missão
        </h2>

        <p className="text-gray-900 text-lg leading-relaxed mb-6">
          Nossa missão? Ajudar{" "}
          <span className="text-[#F5A623] font-bold">VOCÊ</span> a encontrar a
          faculdade dos seus sonhos – perto, acessível e perfeita para o seu
          futuro!
        </p>

        <p className="text-gray-900 text-lg leading-relaxed">
          Para isso, proporcionamos uma solução baseada em{" "}
          <span className="text-[#00BCD4] font-semibold">3 valores</span>:
        </p>
      </div>

      {/* Blocos de valores */}
      <div className="w-full">
        {valores.map((v) => (
          <div
            key={v.titulo}
            className={`${v.bg} w-full px-6 py-10 flex items-center gap-12`}
          >
            <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
              <p
                className={`${v.textTitulo} font-black text-2xl md:text-3xl tracking-wide uppercase shrink-0 md:w-72`}
              >
                {v.titulo}
              </p>
              <p className={`${v.textDesc} text-base md:text-lg leading-relaxed`}>
                {v.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}