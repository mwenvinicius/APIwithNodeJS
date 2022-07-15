const express = require('express');
const router = express.Router();

// Retorna todos os produtos.
router.get('/', (req,res,next) => {
    res.status(200).send({
        mensagem: "Todos os Produtos."
    })
});

// Inseri um produto.
router.post('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Inserindo um Produto."
    })
});

// Retorna um produto.
router.get('/:id_produto',(req,res,next) => {
    const id = req.params.id_produto 
    res.status(200).send({
        mensagem: "Detalhes de um Produto.",
        id: id
    });   
})

// Altera um produto.
router.patch('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Alterando um Produto."
    })
});

// Removendo um produto.
router.delete('/',(req,res,next) => {
    res.status(201).send({
        mensagem: "Removendo um Produto."
    })
});

module.exports = router;