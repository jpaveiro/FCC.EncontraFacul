"use client";

import { useState } from "react";

export default function TalkToUs() {
  const [form, setForm] = useState({
    email: "",
    nome: "",
    telefone: "",
    topico: "",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    console.log("Form enviado:", form);
    alert("Enviado.")
  }

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder:text-transparent outline-none focus:ring-2 focus:ring-[#00BCD4] transition shadow-sm";

  const labelClass = "block text-sm font-semibold text-gray-800 mb-1";

  return (
    <section id="fale-conosco" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Título principal */}
        <h2 className="text-center font-black text-5xl tracking-tight text-gray-900 uppercase mb-14">
          Fale Conosco
        </h2>

        {/* Layout dois colunas */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Coluna esquerda */}
          <div className="md:w-64 shrink-0">
            <p className="font-black text-xl text-gray-900 mb-3">Fale Conosco</p>
            <p className="font-bold text-gray-900 text-sm mb-1">Fale com a nossa equipe</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Estamos aqui para ajudar você com o que precisar.
            </p>
          </div>

          {/* Formulário */}
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-black text-xl text-gray-900">Fale conosco</p>

            {/* E-mail */}
            <div>
              <label className={labelClass}>
                E-mail <span className="text-[#F5A623]">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Nome + Telefone */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className={labelClass}>
                  Nome <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  name="nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="flex-1">
                <label className={labelClass}>
                  Telefone <span className="text-[#F5A623]">*</span>
                </label>
                <input
                  name="telefone"
                  type="tel"
                  value={form.telefone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Tópico */}
            <div>
              <label className={labelClass}>
                Qual tópico melhor atende às suas necessidades?{" "}
                <span className="text-[#F5A623]">*</span>
              </label>
              <div className="relative">
                <select
                  name="topico"
                  value={form.topico}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                >
                  <option value="" disabled />
                  <option value="instituicoes">Instituições</option>
                  <option value="cursos">Cursos</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  &#8964;
                </span>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className={labelClass}>
                Como podemos te ajudar?{" "}
                <span className="text-[#F5A623]">*</span>
              </label>
              <textarea
                name="mensagem"
                rows={6}
                value={form.mensagem}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Botão */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white font-semibold text-base py-4 rounded-2xl transition-colors shadow-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}