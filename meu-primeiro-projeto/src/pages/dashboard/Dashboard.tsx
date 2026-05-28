import { useState, useEffect } from "react";

interface Cliente {
  id: number;
  nome: string;
  email: string;
  status: string;
}

export default function Dashboard() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [carregando, setCarregando] = useState(true);
  
  // Estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  // NOVO: Estado para controlar se estamos editando e qual o ID do cliente
  const [idEditando, setIdEditando] = useState<number | null>(null);

  // Função para buscar dados do banco
  const buscarClientes = () => {
    fetch("http://localhost:3002/api/clientes")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setClientes(dados);
        setCarregando(false);
      })
      .catch((erro) => console.error(erro));
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  // Função disparada ao clicar no botão de enviar (Salvar ou Cadastrar)
  const lidarComEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email) return;

    if (idEditando !== null) {
      // MODO EDIÇÃO: Envia via PUT
      fetch(`http://localhost:3002/api/clientes/${idEditando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
      })
      .then((resposta) => resposta.json())
      .then(() => {
        buscarClientes(); // Atualiza a tabela
        limparFormulario();
      })
      .catch((erro) => console.error("Erro ao atualizar:", erro));
    } else {
      // MODO CADASTRO: Envia via POST
      fetch("http://localhost:3002/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, status: "Ativo" })
      })
      .then((resposta) => resposta.json())
      .then(() => {
        buscarClientes();
        limparFormulario();
      })
      .catch((erro) => console.error("Erro ao cadastrar:", erro));
    }
  };

  // NOVO: Ativa o modo de edição jogando os valores para o formulário
  const prepararEdicao = (cliente: Cliente) => {
    setIdEditando(cliente.id);
    setNome(cliente.nome);
    setEmail(cliente.email);
  };

  // NOVO: Limpa o formulário e cancela a edição se necessário
  const limparFormulario = () => {
    setIdEditando(null);
    setNome("");
    setEmail("");
  };

  // Deletar cliente pelo ID
  const lidarComDeletar = (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este cliente?")) return;

    fetch(`http://localhost:3002/api/clientes/${id}`, {
      method: "DELETE",
    })
    .then((resposta) => {
      if (resposta.ok) {
        buscarClientes();
        if (idEditando === id) limparFormulario(); // Se deletar o que estava editando, limpa o form
      } else {
        console.error("Erro ao tentar deletar o cliente do servidor.");
      }
    })
    .catch((erro) => console.error("Erro ao deletar:", erro));
  };

  return (
    <section id="dashboard" className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 font-sans antialiased pt-24">
      <div className="w-full max-w-4xl flex flex-col gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1 rounded-full w-max ring-1 ring-blue-500/10">
           SQL Server Ativo
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Gerenciador de Clientes
          </h2>
        </div>

        {/* Formulário de Cadastro / Edição */}
        <form onSubmit={lidarComEnvio} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-slate-500">Nome</label>
            <input 
              type="text" 
              placeholder="Ex: José Alencar" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-slate-500">E-mail</label>
            <input 
              type="email" 
              placeholder="jose@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>
          <div className="flex gap-2 items-end">
            <button 
              type="submit"
              className={`w-full text-white font-bold text-sm p-3 rounded-lg cursor-pointer transition-colors shadow-md ${
                idEditando !== null 
                  ? "bg-amber-500 hover:bg-amber-600 shadow-amber-500/10" 
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/10"
              }`}
            >
              {idEditando !== null ? "Salvar Alterações" : "Adicionar no SQL"}
            </button>
            
            {/* Se estiver editando, mostra um botão para cancelar */}
            {idEditando !== null && (
              <button 
                type="button"
                onClick={limparFormulario}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm p-3 rounded-lg cursor-pointer transition-colors"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {/* Tabela de Dados */}
        {carregando ? (
          <div className="text-center py-12 text-slate-500 font-medium animate-pulse">Conectando ao banco...</div>
        ) : (
          <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="p-4">ID</th>
                  <th className="p-4">Nome</th>
                  <th className="p-4">E-mail</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-blue-600 font-bold">#{cliente.id}</td>
                    <td className="p-4 text-slate-900">{cliente.nome}</td>
                    <td className="p-4 text-slate-500">{cliente.email}</td>
                    <td className="p-4">
                      <span className="inline-block rounded-md px-2.5 py-1 text-xs font-semibold border bg-emerald-50 text-emerald-600 border-emerald-200">
                        {cliente.status}
                      </span>
                    </td>
                    <td className="p-4 text-center flex justify-center gap-2">
                      {/* Botão de Editar */}
                      <button
                        onClick={() => prepararEdicao(cliente)}
                        className="px-3 py-1.5 text-xs font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-md transition-colors cursor-pointer"
                      >
                        Editar
                      </button>
                      
                      {/* Botão de Excluir */}
                      <button
                        onClick={() => lidarComDeletar(cliente.id)}
                        className="px-3 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition-colors cursor-pointer"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}