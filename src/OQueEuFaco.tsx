export default function OQueEuFaco() {
  const servicos = [
    {
      icone: "💻",
      titulo: "Desenvolvimento Web",
      descricao: "Criação de sites modernos, rápidos e totalmente responsivos com React e Vite, garantindo uma ótima experiência em qualquer tamanho de tela.",
      cor: "from-blue-500/5 to-cyan-500/5"
    },
    {
      icone: "🎨",
      titulo: "Interface & Estilização",
      descricao: "Interfaces limpas e atraentes utilizando Tailwind CSS v4. Código visual estruturado com foco em performance, transições suaves e componentização.",
      cor: "from-blue-500/5 to-indigo-500/5"
    },
    {
      icone: "🛠️",
      titulo: "Código Estruturado",
      descricao: "Desenvolvimento utilizando TypeScript para garantir um código mais seguro, inteligente e livre de erros bobos durante a produção.",
      cor: "from-indigo-500/5 to-slate-500/5"
    }
  ];

  return (
    // Transicionado para fundo claro (bg-slate-50) em harmonia com as seções anteriores
    <section id="o-que-eu-faco" className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 font-sans antialiased pt-24">
      <div className="w-full max-w-5xl flex flex-col gap-12 items-center">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center flex flex-col gap-3">
          {/* Badge em Azul Corporativo */}
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full w-max mx-auto ring-1 ring-blue-500/10">
            Especialidades
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            O Que Eu Faço?
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base font-medium">
            Transformando ideias e linhas de código em experiências digitais incríveis.
          </p>
        </div>

        {/* Grid de Cartões - Estilo Light Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {servicos.map((servico, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl bg-white p-8 shadow-md border border-slate-200/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/20"
            >
              {/* Efeito de brilho de fundo muito suave e profissional no hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${servico.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              {/* Container do Ícone - Fundo claro suave com borda sutil */}
              <div className="text-4xl mb-4 bg-slate-50 w-14 h-14 flex items-center justify-center rounded-xl border border-slate-100 shadow-sm group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                {servico.icone}
              </div>

              {/* Título do Serviço - Texto Escuro */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {servico.titulo}
              </h3>

              {/* Descrição - Ajustado contraste para leitura */}
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}