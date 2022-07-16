const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const rotaProdutos = require('./routers/produtos');
const rotaPedidos = require('./routers/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false})); // Apenas dados simples;
app.use(bodyParser.json()) // JSON.

app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin',
    'Origin, X-Requrested-With, Contend-Type, Accept, Authorization');

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET')
        res.status(200).send({});
    }
    next();
})


// Quando não encontro a rota.
app.use((req,res,next) => {
    const erro = new Error("Não encontrado.")
    erro.status = 404;
    next(erro)
})

app.use((error,req,res,next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.message
        }
    });
})

module.exports = app;