const { Sap, Estado} = require("../db.js");
const getDatosSap = async (req, res) => {

var miCliente=req.query.cliente
console.log(typeof miCliente)
if(miCliente.length==7){miCliente="0"+miCliente}
if(miCliente.length==6){miCliente="00"+miCliente}
if(miCliente.length==5){miCliente="000"+miCliente}
if(miCliente.length==4){miCliente="0000"+miCliente}
console.log(miCliente)
var misDatos
var miEstado
if (miCliente){
    misDatos = await Sap.findAll({where:{Cliente:miCliente} });
    console.log(misDatos[0])}
    console.log(misDatos.length)
 
    if(misDatos.length>0){
  miEstado = await Estado.findOne({where:{StatusUsuario:misDatos[0].StatusUsuario.split(' ').join('')} });
  if(miEstado){
  misDatos[0].StatusUsuario=miEstado.descripcion}}
    //
    console.log(misDatos)
    res.json(misDatos);
  } 

module.exports = getDatosSap;
