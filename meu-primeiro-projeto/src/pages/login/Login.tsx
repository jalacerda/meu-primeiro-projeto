import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  setLogado: (valor: boolean) => void;
}

export default function Login({ setLogado }: LoginProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const usuarioCorreto = "josealmyilustrador@gmail.com";
    const senhaCorreta = "123";

    if (email === usuarioCorreto && senha === senhaCorreta) {
      // Salva no navegador que o usuário está logado
      localStorage.setItem('usuarioLogado', 'true');
      // Atualiza o estado global no App.tsx
      setLogado(true);
      // Vai para o Dashboard
      navigate('/dashboard');
    } else {
      alert('E-mail ou senha incorretos! Dica: josealmyilustrador@gmail.com / 123');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-28">
      <div className="sm:mx-auto w-full max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          Acesse sua conta
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Área restrita para o Gerenciador de Clientes
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Endereço de E-mail
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="seu-email@exemplo.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Entrar no painel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}