const express = require('express');
const router = express.Router();

// Retorna todos os pedidos.
router.get('/', (req,res,next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(200).send({
        mensagem: "Todos os Pedidos !",
        pedidoCriado: pedido
    })
});

// Inseri um pedido.
router.post('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Inserção de um Pedido."
    })
});

// Retorna um pedido.
router.get('/:id_pedido',(req,res,next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: "Detalhes de um Pedido.",
        id: id
    });
})

// Removendo um pedido.
router.delete('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Pedido excluído com sucesso."
    })
});

module.exports = router;