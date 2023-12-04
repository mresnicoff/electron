const asignarPermisos = async (req, res) => {
    const { Permiso, } = require("../db.js");
    const { Usuario, } = require("../db.js");
datos=req.body
const usuario=await Usuario.findOne({where:{email:datos.user}})
console.log(datos.user)
datos.permisos.forEach((id) => {
    usuario.addPermisos(id);
  });

res.json({mensaje:"hola"});
}

module.exports = asignarPermisos