import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">

        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-[#fffff]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
            <span className="font-black text-xl leading-tight uppercase tracking-wide">
              Encontra<br />Facul
            </span>
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed">
            EncontraFacul<br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">

          {/* Redes Sociais */}
          <div className="flex flex-col gap-2">
            <p className="font-black text-sm uppercase tracking-wide mb-1">Redes Sociais</p>
            {["Facebook", "Instagram", "X (ex-Twitter)", "Tik Tok"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-300 text-sm hover:text-white transition-colors text-center md:text-left"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-2">
            <p className="font-black text-sm uppercase tracking-wide mb-1">Navegação</p>
            {["Início", "Instituições", "Nossa missão", "Fale conosco"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-300 text-sm hover:text-white transition-colors text-center md:text-left"
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
