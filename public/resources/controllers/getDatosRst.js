const { Rst, } = require("../db.js");
const getDatosRst = async (req, res) => {

const miCliente=req.query.cliente
const miSuministro=req.query.suministro
console.log(miSuministro)
var misDatos
var misDatos2
var misDatos3
if (miCliente){
    misDatos = await Rst.findAll({raw:true, where:{NroCliente:miCliente}});
  if(miSuministro!==miCliente){
    misDatos2 = await Rst.findAll({raw:true, where:{NroCliente:miSuministro}});
    if (misDatos2.length){
      misDatos3=misDatos.concat(misDatos2)
    }}
    else {misDatos3=misDatos}
  
  }

    //
    console.log(misDatos3)
    res.json(misDatos3);
  } 

module.exports = getDatosRst;
