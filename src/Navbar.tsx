import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  logado: boolean;
  onLogout: () => void;
}

export default function Navbar({ logado, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Perfil', href: '#perfil' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'O Que Eu Faço', href: '#o-que-eu-faco' },
    { name: 'Projetos', href: '#projetos' },    
    { name: 'Contato', href: '#contato' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

 const efetuarSair = () => {
  // Mostra a caixinha de confirmação na tela
  const desejaSair = window.confirm("Você realmente deseja sair do sistema?");
  
  // Se o usuário clicar em "OK", o valor será true e ele sai
  if (desejaSair) {
    onLogout();
    setIsOpen(false);
    navigate('/'); // Volta para o portfolio ao deslogar
  }
  // Se clicar em "Cancelar", não faz nada e ele continua logado!
};

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 text-slate-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl tracking-wider text-blue-600">
            JOSÉ.DEV
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}

            {/* Alternância Dinâmica com Ícone */}
            {logado ? (
              <div className="flex items-center space-x-4 border-l border-slate-200 pl-4">
                {/* Ícone de Usuário que leva ao Dashboard */}
                <Link 
                  to="/dashboard" 
                  title="Ir para o Dashboard"
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
                {/* Botão Sair */}
                <button 
                  onClick={efetuarSair}
                  className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-slate-100 text-slate-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200/80">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            
            {/* Login / Alternância Mobile */}
            {logado ? (
              <div className="pt-2 border-t border-slate-200 mt-2 space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-slate-100 text-slate-700 px-3 py-2 rounded-md text-base font-medium"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Meu Painel</span>
                </Link>
                <button
                  onClick={efetuarSair}
                  className="w-full text-center bg-red-50 text-red-600 px-3 py-2 rounded-md text-base font-medium border border-red-200"
                >
                  Sair da Conta
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="mt-2 block text-center bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}