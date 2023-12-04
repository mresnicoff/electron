const { Permiso, } = require("../db.js");
const getPermisos = async (req, res) => {
try{
  const  datos=req.query
if(datos.length){
  const miPermiso=Permiso.findOne({ where: { id: datos.id } });
if (miPermiso){
  res.json(miPermiso)
}
}
else{
    const misPermisos = await Permiso.findAll();
    res.json(misPermisos);
}} 
catch (error){
  res.status(500).json({ message: error.message });
}
} 

module.exports = getPermisos;
