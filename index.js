require("dotenv").config();
const express = require("express");
const veiculoController = require("./controllers/veiculoController.js");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get("/", veiculoController.getVeiculos);
app.post("/", veiculoController.postVeiculos);

app.listen(port, ()=>{
    console.log("Servidor rodando em "+ port);
});