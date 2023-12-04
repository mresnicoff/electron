const Sequelize = require('sequelize');
const op = Sequelize.Op;

const { Sf, Rst } = require("../db.js");
const CerradoRstconServicioBaja = async (req, res) => {

var misDatos
    misDatos = await Rst.findAll({ attributes: ['NroCliente'], raw:true,where:{Servicio:"Remocion de instalacion tecnica",Estado:"CERRADO" }});
    var miArray=misDatos.map(dato=>parseInt(dato.NroCliente))
    var misDatos2=await Sf.findAll({  raw:true,where:{cliente:miArray, submotivo:"Solicitud de Certificado Demolición", desc_estado:{[op.not]:'CERRADO'}}});
    //

    res.json(misDatos2);
 
}
module.exports = CerradoRstconServicioBaja;
