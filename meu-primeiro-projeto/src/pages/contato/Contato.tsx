import React, { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Obrigado pelo contato, ${formData.nome}! Mensagem enviada.`);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // Transicionado para fundo claro (bg-slate-50) em harmonia com o projeto
    <section id="contato" className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 font-sans antialiased pt-24">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center flex flex-col gap-3">
          {/* Badge em Azul Corporativo */}
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full w-max mx-auto ring-1 ring-blue-500/10">
            Conexão
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Vamos conversar?
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base font-medium">
            Tem uma ideia de projeto, proposta de trabalho ou apenas quer dar um oi? Mande uma mensagem!
          </p>
        </div>

        {/* Layout em duas colunas: Informações e Formulário */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Coluna 1: Canais Diretos (Cards Brancos Premium) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Canais diretos</h3>
            
            {/* Cartão de Email */}
            <a 
              href="mailto:seu-email@dominio.com" 
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/30 hover:shadow-md transition-all group"
            >
              <div className="text-2xl bg-slate-50 w-12 h-12 flex items-center justify-center rounded-lg border border-slate-100 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                ✉️
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-mail</span>
                <span className="text-sm font-semibold text-slate-700">jose@exemplo.com</span>
              </div>
            </a>

            {/* Cartão de LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/30 hover:shadow-md transition-all group"
            >
              <div className="text-2xl bg-slate-50 w-12 h-12 flex items-center justify-center rounded-lg border border-slate-100 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                💼
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">LinkedIn</span>
                <span className="text-sm font-semibold text-slate-700">in/jose-desenvolvedor</span>
              </div>
            </a>

            {/* Cartão de WhatsApp */}
            <a 
              href="https://wa.me/seu-numero" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-500/30 hover:shadow-md transition-all group"
            >
              <div className="text-2xl bg-slate-50 w-12 h-12 flex items-center justify-center rounded-lg border border-slate-100 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                💬
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
                <span className="text-sm font-semibold text-slate-700">Conversar agora</span>
              </div>
            </a>
          </div>

          {/* Coluna 2: Formulário Light Mode */}
          <form 
            onSubmit={handleSubmit} 
            className="md:col-span-7 flex flex-col gap-4 p-8 rounded-2xl bg-white border border-slate-200 shadow-md"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nome" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Seu Nome</label>
              <input 
                type="text" 
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: João Silva" 
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Seu E-mail</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: joao@email.com" 
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensagem" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sua Mensagem</label>
              <textarea 
                id="mensagem"
                name="mensagem"
                required
                rows={5}
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..." 
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Botão de envio em Azul Corporativo */}
            <button 
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/10 hover:bg-blue-700 hover:scale-[1.01] transition-all cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}