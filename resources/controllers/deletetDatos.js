const { Consumo, } = require("../db.js");
const deleteDatos = async (req, res) => {

const zona=req.query.zona

var misConsumos

    misConsumos = await Consumo.destroy({where:{zona:zona}});


    res.json(misConsumos);
  } 

module.exports = deleteDatos;