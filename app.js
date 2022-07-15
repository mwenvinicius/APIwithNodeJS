const express = require('express');
const app = express();

const rotaProdutos = require('./routers/produtos');
const rotaPedidos = require('./routers/pedidos');

app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);

module.exports = app;