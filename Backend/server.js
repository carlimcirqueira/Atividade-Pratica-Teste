const express = require('express');
const cors = require('cors');
const routes = require('./routes/rota');

require('./database');

const app = express();

app.use(express.json());

// 🔥 CORS FORÇADO (SEM DEPENDER DE SORTE)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://atividade-pratica-sistema-cadastro-autenticacao-cw32ozvsc.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(cors({
  origin: "https://atividade-pratica-sistema-cadastro-autenticacao-cw32ozvsc.vercel.app"
}));

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});