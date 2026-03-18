import Image from "next/image";

export interface Depoimento {
  texto: string;
  nome: string;
  cargo: string;
  fonte: string;
  avatar: string;
}

interface Props {
  depoimento: Depoimento;
}

export default function Testimony({ depoimento }: Props) {
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">

        <div className="flex-1">
          {/* Aspas  */}
          <div className="text-[#00BCD4] text-[8rem] leading-none font-serif select-none mb-2">
            ❝
          </div>

          <p className="text-gray-900 text-3xl md:text-4xl font-semibold leading-snug max-w-2xl">
            {depoimento.texto}
          </p>
        </div>

        {/* Lado direito — fonte + autor */}
        <div className="shrink-0 flex flex-col items-start gap-3">
          <p className="font-black text-3xl text-gray-900">{depoimento.fonte}</p>

          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
              {depoimento.avatar ? (
                <Image
                  src={depoimento.avatar}
                  alt={depoimento.nome}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gray-300" />
              )}
            </div>

            <div>
              <p className="font-bold text-gray-900 text-sm">{depoimento.nome}</p>
              <p className="text-gray-500 text-sm">{depoimento.cargo}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}