export default function Projetos() {
  const listaProjetos = [
    {
      titulo: "E-Commerce minimalista",
      descricao: "Uma plataforma de comércio eletrônico com foco em performance, carrinho em tempo real e checkout integrado.",
      tags: ["React", "Vite", "Tailwind v4", "TypeScript"],
      linkGihub: "https://github.com",
      linkLive: "https://vercel.com",
      imagem: "💻"
    },
    {
      titulo: "Plataforma de Finanças",
      descricao: "Dashboard interativo para controle de gastos pessoais, com gráficos dinâmicos e relatórios mensais exportáveis.",
      tags: ["React", "D3.js", "Tailwind v4", "Context API"],
      linkGihub: "https://github.com",
      linkLive: "https://vercel.com",
      imagem: "📊"
    },
    {
      titulo: "Gerenciador de Tarefas",
      descricao: "Aplicativo em estilo Kanban para organização de projetos em equipe com arrastar e soltar (drag and drop).",
      tags: ["React", "Tailwind v4", "TypeScript", "Zustand"],
      linkGihub: "https://github.com",
      linkLive: "https://vercel.com",
      imagem: "📋"
    }
  ];

  return (
    // Transicionado para fundo claro (bg-slate-50) em harmonia com as seções anteriores
    <section id="projetos" className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 font-sans antialiased pt-24">
      <div className="w-full max-w-5xl flex flex-col gap-12 items-center">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center flex flex-col gap-3">
          {/* Badge em Azul Corporativo */}
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full w-max mx-auto ring-1 ring-blue-500/10">
            Portfólio
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Projetos Recentes
          </h2>
          <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base font-medium">
            Uma seleção dos últimos sistemas e interfaces que desenvolvi.
          </p>
        </div>

        {/* Grid de Projetos - Estilo Light Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {listaProjetos.map((projeto, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-md transition-all duration-300 hover:border-blue-500/20 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Área de Visualização/Imagem do Projeto - Fundo cinza suave */}
              <div className="relative flex h-48 w-full items-center justify-center bg-slate-100 border-b border-slate-200 text-6xl group-hover:bg-slate-50 transition-colors duration-300">
                {projeto.imagem}
                
                {/* Overlay Suave no Hover */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Detalhes do Projeto */}
              <div className="flex flex-1 flex-col p-6">
                {/* Título - Transiciona para azul no hover do card */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {projeto.titulo}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-4 flex-1">
                  {projeto.descricao}
                </p>

                {/* Tags de Tecnologia - Tons claros de cinza e texto escuro */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links de Ação - Botões limpos e integrados */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <a 
                    href={projeto.linkGihub}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Código
                  </a>
                  <a 
                    href={projeto.linkLive}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                  >
                    Deploy ao vivo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}