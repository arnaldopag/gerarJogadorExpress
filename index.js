const express = require("express");
const router = require("./routes");
const dados = require("./dados.json");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(router);
app.listen(port, function (){
    console.log(`Servidor Rodando na porta ${port}`);
});
