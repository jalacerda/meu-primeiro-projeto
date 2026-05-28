import { useState,} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Perfil from './Perfil';
import Sobre from './Sobre';
import OQueEuFaco from './OQueEuFaco';
import Projetos from './Projetos';
import Contato from './Contato';
import Rodape from './Rodape'; 
import Dashboard from './Dashboard';
import Login from './Login';

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <section id="perfil"><Perfil /></section>
      <section id="sobre"><Sobre /></section>
      <section id="o-que-eu-faco"><OQueEuFaco /></section>
      <section id="projetos"><Projetos /></section>   
      <section id="contato"><Contato /></section>
    </main>
  );
}

export default function App() {
  // Inicializa o estado lendo do localStorage (se existir o token, está logado)
  const [logado, setLogado] = useState<boolean>(() => {
    return localStorage.getItem('usuarioLogado') === 'true';
  });

  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setLogado(false);
  };

  return (
    <Router>
      <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-300">
        {/* Passamos o estado logado e a função de logout para a Navbar */}
        <Navbar logado={logado} onLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Passamos a função setLogado para a tela de Login ativar ao entrar */}
          <Route path="/login" element={
            logado ? <Navigate to="/dashboard" /> : <Login setLogado={setLogado} />
          } />
          
          {/* Rota Protegida: se não estiver logado, chuta de volta para o login */}
          <Route path="/dashboard" element={
            logado ? (
              <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Dashboard />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          } />
        </Routes>

        <Rodape />
      </div>
    </Router>
  );
}