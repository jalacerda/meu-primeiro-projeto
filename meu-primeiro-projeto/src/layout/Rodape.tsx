export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Transicionado para fundo branco limpo com uma borda superior bem sutil
    <footer className="w-full bg-white border-t border-slate-200 py-8 px-4 font-sans antialiased text-sm text-slate-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Direitos Autorais - Texto ajustado para o Light Mode */}
        <p className="font-medium text-center sm:text-left">
          &copy; {anoAtual} <span className="text-slate-800 font-bold">José</span>. Todos os direitos reservados.
        </p>

        {/* Links Rápidos de Navegação - Hover atualizado para Azul Corporativo */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
          <a href="#perfil" onClick={(e) => handleScroll(e, '#perfil')} className="text-slate-500 hover:text-blue-600 transition-colors">Início</a>
          <a href="#sobre" onClick={(e) => handleScroll(e, '#sobre')} className="text-slate-500 hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#o-que-eu-faco" onClick={(e) => handleScroll(e, '#o-que-eu-faco')} className="text-slate-500 hover:text-blue-600 transition-colors">O que eu faço?</a>
          <a href="#projetos" onClick={(e) => handleScroll(e, '#projetos')} className="text-slate-500 hover:text-blue-600 transition-colors">Projetos</a>
          <a href="#contato" onClick={(e) => handleScroll(e, '#contato')} className="text-slate-500 hover:text-blue-600 transition-colors">Contato</a>
        </div>

      </div>
    </footer>
  );
}