const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configura a conexão com o PostgreSQL rodando na sua máquina
const pool = new Pool({
  user: 'postgres',          // Usuário padrão do Postgres
  host: 'localhost',         // Rodando localmente na sua máquina
  database: 'meu_portfolio', // O banco que você criou no pgAdmin
  password: 'teste', // ⚠️ COLOQUE AQUI A SENHA QUE VOCÊ CRIOU NA INSTALAÇÃO!
  port: 5432,                // Porta padrão do Postgres
});

// Testando a conexão com o banco
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao PostgreSQL:', err.stack);
  }
  console.log('Conectado com sucesso ao banco PostgreSQL!');
  release();
});

// 2. Função para criar a tabela e resetar os dados de teste usando SQL
async function inicializarBanco() {
  try {
    // Cria a tabela usando a sintaxe exata do PostgreSQL
    await pool.query(`
      CREATE TABLE IF NOT EXISTS clientes (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100),
        status VARCHAR(20)
      );
    `);

    // Limpa a tabela para não duplicar dados toda vez que reiniciar o servidor
    await pool.query("TRUNCATE TABLE clientes RESTART IDENTITY;");

    // Insere dados fictícios usando SQL puro
    await pool.query("INSERT INTO clientes (nome, email, status) VALUES ('José no Postgres', 'jose.pg@email.com', 'Ativo');");
    await pool.query("INSERT INTO clientes (nome, email, status) VALUES ('Amanda Lima', 'amanda@email.com', 'Pendente');");
    await pool.query("INSERT INTO clientes (nome, email, status) VALUES ('Carlos Eduardo', 'carlos@email.com', 'Ativo');");
    
    console.log("Tabela 'clientes' criada e dados de teste inseridos via SQL.");
  } catch (err) {
    console.error("Erro ao inicializar tabelas no banco:", err);
  }
}
inicializarBanco();

// 3. Rota da API que o seu React vai chamar para ler os dados do banco
app.get('/api/clientes', async (req, res) => {
  try {
    // Query SQL real para selecionar os dados do Postgres
    const resultado = await pool.query("SELECT id, nome, email, status FROM clientes ORDER BY id ASC");
    res.json(resultado.rows); // Devolve as linhas encontradas para o React
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro interno ao consultar o PostgreSQL" });
  }
});

app.listen(3002, () => {
  console.log('Servidor Back-end rodando em http://localhost:3002');
});

// Adicione logo abaixo do app.get('/api/clientes', ...)
app.post('/api/clientes', async (req, res) => {
  const { nome, email, status } = req.body;
  try {
    // Comando SQL para inserir um novo registro dinamicamente
    const querySQL = "INSERT INTO clientes (nome, email, status) VALUES ($1, $2, $3) RETURNING *";
    const valores = [nome, email, status || 'Ativo'];
    
    const resultado = await pool.query(querySQL, valores);
    res.status(201).json(resultado.rows[0]); // Devolve o cliente criado com o ID gerado pelo banco
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar no banco de dados" });
  }
});