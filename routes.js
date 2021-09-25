const express = require("express");
const router = express.Router();
const gerarJogador = require("./gerador");
const dados = require("./dados.json");

router.get("/gerador", function (req, res) {
    const jogador = gerarJogador();
    res.json(jogador);
});

module.exports = router;
