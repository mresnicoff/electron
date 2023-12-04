const { Rst, } = require("../db.js");
var sequelize = require("sequelize");
const getDatos = async (req, res) => {

var misDatos
    misDatos = await Rst.findOne({attributes:[sequelize.fn("MAX", sequelize.col("FechaVencPedido"))] ,  raw: true});
  // misDatos= await Rst.findAll({attributes:["FechaIngresoCliente"] });
console.log(misDatos)

    res.json(misDatos);}
  

module.exports = getDatos;
