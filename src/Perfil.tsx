export default function Perfil() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Mudança para fundo claro em degradê corporativo suave (from-blue-50 via-white to-slate-50)
    <section id="perfil" className="relative flex min-h-screen items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-slate-50 px-4 font-sans antialiased overflow-hidden">
      {/* Detalhes de luz de fundo suaves adaptados para o Light Mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-4xl text-center flex flex-col items-center gap-6 z-10 pt-16">
        
        {/* Tag de Status de Disponibilidade - Light Mode Premium */}
        <div className="flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponível para novos projetos
        </div>

        {/* Título Principal de Impacto - Texto escuro com degradê em Azul Corporativo */}
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl max-w-3xl leading-none">
          Desenvolvendo interfaces <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            modernas e eficientes
          </span>
        </h1>

        {/* Subtítulo Curto - Contraste ajustado para leitura no claro */}
        <p className="text-slate-600 text-base sm:text-xl max-w-xl font-medium leading-relaxed">
          Oi, eu sou o <span className="text-slate-900 font-bold">José</span>. Desenvolvedor Front-End especializado em construir experiências digitais incríveis com React e Tailwind CSS.
        </p>

        {/* Botões de Ação - Azul Corporativo em destaque e botão secundário limpo */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <a
            href="#projetos"
            onClick={(e) => handleScroll(e, '#projetos')}
            className="flex w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/10 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200"
          >
            Ver meus trabalhos
          </a>
          
          <a
            href="#contato"
            onClick={(e) => handleScroll(e, '#contato')}
            className="flex w-full sm:w-auto items-center justify-center rounded-xl bg-white border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200"
          >
            Vamos conversar
          </a>
        </div>

      </div>

      {/* Indicador visual discreto para rolar para baixo - Ajustado para cinza */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-1 h-4 bg-slate-200 rounded-full relative overflow-hidden">
          <div className="w-full h-1/2 bg-blue-500 rounded-full absolute top-0 left-0 animate-bounce" />
        </div>
      </div>
    </section>
  );
}