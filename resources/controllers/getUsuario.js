const { Usuario, } = require("../db.js");
const getUsuario = async (req, res) => {

  const  datos=req.query
console.log(datos)
  const user = await Usuario.findOne({ where: { email: datos.email } });
    res.json(user);
  } 

module.exports = getUsuario;
