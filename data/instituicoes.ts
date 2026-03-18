import { Instituicao } from "@/components/institutions-section";

export const instituicoesMock: Instituicao[] = [
  {
    id: 1,
    sigla: "USP",
    nome: "Universidade de São Paulo",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Sudeste",
    descricao:
      "A maior universidade do Brasil e da América Latina, reconhecida mundialmente pela excelência em pesquisa e ensino.",
    tipo: "Universidade",
    curso: "Graduação",
    natureza: "Pública",
    notaMec: 5,
    site: "https://www.usp.br",
  },
  {
    id: 2,
    sigla: "UFMG",
    nome: "Universidade Federal de MG",
    cidade: "Belo Horizonte",
    estado: "MG",
    regiao: "Sudeste",
    descricao:
      "Referência nacional em ensino e pesquisa com forte atuação em extensão universitária.",
    tipo: "Universidade",
    curso: "Graduação",
    natureza: "Pública",
    notaMec: 5,
    site: "https://www.ufmg.br",
  },
  {
    id: 3,
    sigla: "Unicamp",
    nome: "Universidade Estadual de Campinas",
    cidade: "Campinas",
    estado: "SP",
    regiao: "Sudeste",
    descricao:
      "Uma das principais instituições públicas de ensino superior e pesquisa do Brasil e da América Latina.",
    tipo: "Universidade",
    curso: "Graduação",
    natureza: "Pública",
    notaMec: 5,
    site: "https://www.unicamp.br",
  },
  {
    id: 4,
    sigla: "SENAI",
    nome: "Serviço Nacional de Aprendizagem Industrial",
    cidade: "Brasil",
    estado: "",
    regiao: "Sudeste",
    descricao:
      "Referência em formação profissional para a indústria brasileira.",
    tipo: "Centro",
    curso: "Profissionalizante",
    natureza: "Privada",
    notaMec: 4,
    site: "https://www.senai.br",
  },
  {
    id: 5,
    sigla: "Mackenzie",
    nome: "Universidade Presbiteriana Mackenzie",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Centro",
    descricao: "O Campus Higienópolis da Universidade Presbiteriana Mackenzie é o principal e histórico, no coração da região central de SP (bairro Higienópolis), com foco em graduação, pós e pesquisa em áreas como Computação, Administração e Engenharia. Possui estrutura moderna, alta empregabilidade e tradição desde 1896.",
    tipo: "Universidade",
    curso: "Graduação",
    natureza: "Privada",
    notaMec: 5,
    site: "https://mackenzie.br"
  }
];