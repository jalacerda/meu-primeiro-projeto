const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração de conexão com o seu SQL Server local
const config = {
    user: 'sa',                       // O usuário que ativamos!
    password: 'teste',             // A senha que você definiu para ele
    server: 'localhost',              // Pode deixar apenas localhost agora
    database: 'meu_portfolio_mssql',  // Nome do banco que você criou
    options: {
        encrypt: true,
        trustServerCertificate: true  // Ignora o certificado para rodar local
    }
};
// Rota GET para o React puxar os dados
app.get('/api/clientes', async (req, res) => {
  try {
    await sql.connect(config);
    const resultado = await sql.query("SELECT * FROM clientes ORDER BY id ASC");
    res.json(resultado.recordset); // A Microsoft devolve as linhas dentro de 'recordset'
 } catch (err) {
    console.error("ERRO REAL DO SQL SERVER:", err.message); // <-- Mudamos esta linha
    res.status(500).json({ error: err.message }); // <-- E esta linha
  }
});

// Rota POST para cadastrar novos clientes pelo site
app.post('/api/clientes', async (req, res) => {
  const { nome, email, status } = req.body;
  try {
    await sql.connect(config);
    const request = new sql.Request();
    request.input('nome', sql.VarChar, nome);
    request.input('email', sql.VarChar, email);
    request.input('status', sql.VarChar, status || 'Ativo');
    
    await request.query("INSERT INTO clientes (nome, email, status) VALUES (@nome, @email, @status)");
    res.status(201).json({ message: "Salvo no SQL Server!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar no SQL Server" });
  }
});

app.listen(3002, () => {
  console.log('Back-end rodando com SQL Server da Microsoft em http://localhost:3002');
});

// Exemplo de Rota GET: Buscar dados do SQL Server
app.get('/api/dados', async (req, res) => {
    try {
        // Garanta que a conexão com o banco esteja aberta aqui
        const result = await sql.query`SELECT * FROM SuaTabela`; 
        res.json(result.recordset); // Retorna os dados como JSON para o React
    } catch (err) {
        console.error('Erro na query:', err);
        res.status(500).json({ error: 'Erro ao buscar dados do servidor.' });
    }
});

// Exemplo de Rota GET: Buscar dados do SQL Server
app.get('/api/dados', async (req, res) => {
    try {
        // Garanta que a conexão com o banco esteja aberta aqui
        const result = await sql.query`SELECT * FROM SuaTabela`; 
        res.json(result.recordset); // Retorna os dados como JSON para o React
    } catch (err) {
        console.error('Erro na query:', err);
        res.status(500).json({ error: 'Erro ao buscar dados do servidor.' });
    }
});

// Nova rota para DELETAR cliente do SQL Server
app.delete('/api/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params; // Pega o ID que veio na URL

        // Cria a conexão e executa o comando SQL
        const pool = await sql.connect(config);
        const resultado = await pool.request()
            .input('id', sql.Int, id)
            .query('DELETE FROM Clientes WHERE id = @id'); // Ajuste 'Clientes' para o nome real da sua tabela

        // Verifica se alguma linha foi afetada (se o cliente realmente existia)
        if (resultado.rowsAffected[0] > 0) {
            res.json({ mensagem: 'Cliente deletado com sucesso!' });
        } else {
            res.status(404).json({ erro: 'Cliente não encontrado.' });
        }
    } catch (erro) {
        console.error('Erro ao deletar no SQL Server:', erro);
        res.status(500).json({ erro: 'Erro interno do servidor ao deletar.' });
    }
});

// Rota para ATUALIZAR dados do cliente no SQL Server
app.put('/api/clientes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body; // Pega os novos dados enviados do front

        const pool = await sql.connect(config);
        await pool.request()
            .input('id', sql.Int, id)
            .input('nome', sql.VarChar, nome)
            .input('email', sql.VarChar, email)
            .query('UPDATE Clientes SET nome = @nome, email = @email WHERE id = @id'); // Altere 'Clientes' se necessário

        res.json({ mensagem: 'Cliente atualizado com sucesso!' });
    } catch (erro) {
        console.error('Erro ao atualizar no SQL Server:', erro);
        res.status(500).json({ erro: 'Erro interno ao atualizar cliente.' });
    }
});