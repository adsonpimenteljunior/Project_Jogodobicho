const express = require('express');
const app = express();
const port = 3000;

// Rota simples
app.get('/', (req, res) => {
  res.json({ texto: 'Olá do backend Node.js!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
