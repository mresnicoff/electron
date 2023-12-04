const { Sf, } = require("../db.js");
const getDatos = async (req, res) => {

const miCliente=req.query.cliente
console.log(miCliente)
var misDatos
if (miCliente){
    misDatos = await Sf.findAll({where:{cliente:miCliente, motivo:"Baja de Contrato" }});}

    //
    console.log(misDatos)
    res.json(misDatos);
  } 

module.exports = getDatos;
