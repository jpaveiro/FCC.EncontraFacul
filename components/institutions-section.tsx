"use client";

import { useState, useMemo } from "react";

export type Regiao = "Norte" | "Nordeste" | "Centro Oeste" | "Sudeste" | "Sul" | "Centro";
export type TipoCurso = "Técnico" | "Profissionalizante" | "Graduação";
export type Natureza = "Pública" | "Privada";

export interface Instituicao {
  id: string | number;
  sigla: string;
  nome: string;
  cidade: string;
  estado: string;
  regiao: Regiao;
  descricao: string;
  tipo: string;
  curso: TipoCurso;
  natureza: Natureza;
  notaMec: 1 | 2 | 3 | 4 | 5;
  site: string;
}

interface Props {
  instituicoes: Instituicao[];
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
        active
          ? "bg-[#00BCD4] text-white border-[#00BCD4]"
          : "bg-white text-gray-700 border-gray-300 hover:border-[#00BCD4]"
      }`}
    >
      {label}
    </button>
  );
}

function Card({ inst }: { inst: Instituicao }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white flex flex-col">
      {/* Header teal */}
      <div className="bg-[#00BCD4] px-5 py-4">
        <p className="text-white font-extrabold text-2xl leading-none">{inst.sigla}</p>
        <p className="text-white font-semibold text-base mt-0.5">{inst.nome}</p>
        <p className="text-white/80 text-xs mt-1">
          {inst.cidade}, {inst.estado} — {inst.regiao}
        </p>
      </div>

      {/* Body */}
      <div className="bg-[#f0f0f0] px-5 py-4 flex flex-col flex-1 gap-4">
        <p className="text-gray-700 text-sm leading-relaxed">{inst.descricao}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {[inst.tipo, inst.curso, inst.natureza].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-gray-400 text-gray-600 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={inst.site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 underline underline-offset-2 hover:text-[#00BCD4] transition-colors w-fit"
        >
          Visite o site
        </a>
      </div>
    </div>
  );
}

export default function InstitutionsSection({ instituicoes }: Props) {
  const [busca, setBusca] = useState("");
  const [regioes, setRegioes] = useState<Regiao[]>([]);
  const [tipos, setTipos] = useState<TipoCurso[]>([]);
  const [notas, setNotas] = useState<number[]>([]);
  const [naturezas, setNaturezas] = useState<Natureza[]>([]);

  function toggle<T>(arr: T[], val: T, set: (v: T[]) => void) {
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  }

  const filtradas = useMemo(() => {
    return instituicoes.filter((inst) => {
      const q = busca.toLowerCase();
      if (q && !inst.nome.toLowerCase().includes(q) && !inst.sigla.toLowerCase().includes(q))
        return false;
      if (regioes.length && !regioes.includes(inst.regiao)) return false;
      if (tipos.length && !tipos.includes(inst.curso)) return false;
      if (notas.length && !notas.includes(inst.notaMec)) return false;
      if (naturezas.length && !naturezas.includes(inst.natureza)) return false;
      return true;
    });
  }, [busca, regioes, tipos, notas, naturezas, instituicoes]);

  const filtrosAtivos = [...regioes, ...tipos, notas.map(String), ...naturezas].flat();

  return (
    <section id="instituicoes" className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Page title */}
        <h1 className="text-center font-black text-5xl tracking-tight text-gray-900 mb-8 uppercase">
          Instituições
        </h1>

        {/* Search bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 max-w-2xl mx-auto mb-3 gap-2">
          <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="ex: universidade presbiteriana mackenzie"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 text-sm outline-none text-gray-600 placeholder:text-gray-400"
          />
        </div>

        {/* Active filters label */}
        <p className="text-center text-sm mb-8">
          <span className="font-bold">Filtros ativos:</span>{" "}
          <span className="text-gray-500">
            {filtrosAtivos.length === 0 ? "Nenhum" : filtrosAtivos.join(", ")}
          </span>
        </p>

        {/* Layout: sidebar + grid */}
        <div className="flex gap-6 items-start">

          {/* ── Sidebar filtros ── */}
          <aside className="hidden lg:block w-52 shrink-0 border border-gray-300 rounded-2xl p-4 sticky top-6">
            <p className="text-center font-semibold text-gray-800 mb-4">Filtros</p>

            <FilterGroup label="Região">
              {(["Norte", "Nordeste", "Centro", "Centro Oeste", "Sudeste", "Sul"] as Regiao[]).map((r) => (
                <Pill key={r} label={r} active={regioes.includes(r)} onClick={() => toggle(regioes, r, setRegioes)} />
              ))}
            </FilterGroup>

            <FilterGroup label="Tipo de curso">
              {(["Técnico", "Profissionalizante", "Graduação"] as TipoCurso[]).map((t) => (
                <Pill key={t} label={t} active={tipos.includes(t)} onClick={() => toggle(tipos, t, setTipos)} />
              ))}
            </FilterGroup>

            <FilterGroup label="Nota no MEC">
              <div className="flex gap-2 flex-wrap">
                {[5, 4, 3, 2, 1].map((n) => (
                  <button
                    key={n}
                    onClick={() => toggle(notas, n, setNotas)}
                    className={`w-8 h-8 rounded-full text-sm font-bold border transition-colors ${
                      notas.includes(n)
                        ? "bg-[#00BCD4] text-white border-[#00BCD4]"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#00BCD4]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup label="Natureza">
              {(["Pública", "Privada"] as Natureza[]).map((n) => (
                <Pill key={n} label={n} active={naturezas.includes(n)} onClick={() => toggle(naturezas, n, setNaturezas)} />
              ))}
            </FilterGroup>
          </aside>

          {/* ── Grid de cards ── */}
          <div className="flex-1">
            {filtradas.length === 0 ? (
              <p className="text-gray-500 text-center py-20">Nenhuma instituição encontrada.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filtradas.map((inst) => (
                  <Card key={inst.id} inst={inst} />
                ))}
              </div>
            )}

            {/* Ver todos */}
            <div className="flex justify-center mt-10">
              <a href="#" className="flex items-center gap-1.5 text-sm text-gray-500 underline underline-offset-2 hover:text-[#00BCD4] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Ver todos os resultados para esta pesquisa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold text-gray-700 mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}