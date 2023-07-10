const Veiculo = require("../models/veiculoModel.js");
const DB = require("../models/dbModels.js");


async function getVeiculos (req, res) {
    const veiculos = await DB.findAll(process.env.DB_COLLECTION);

    res.render("veiculoView", {veiculos});
}

async function postVeiculos (req, res){
    const {placa, ano, modelo, fabricante} = req.body;

    const veiculo = new Veiculo (placa, ano, modelo, fabricante);

    await DB.insertOne(process.env.DB_COLLECTION, veiculo);

    res.redirect("/");
}



module.exports = {getVeiculos, postVeiculos};