const { Usuario, Permiso } = require("../db.js");
const bcrypt = require("bcrypt")
const handleUsuarios = async (req, res) => {
if(req.method==="POST"){
  try {
    async function hashPassword(plaintextPassword) {
      const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash}
  const  cargar=req.body
  const emailRegistrado = await Usuario.findOne({ where: { email: cargar.email } });
if (emailRegistrado === null) {
  const cargaCorregida={}
  cargaCorregida.Nombre=cargar.nombre
  cargaCorregida.passwordhasheada=await hashPassword(cargar.password)
  cargaCorregida.email=cargar.email
  await Usuario.create(cargaCorregida);
      res.json(req.body);
  
} else {
  console.log("entró al else")
  res.status(422).json({message:"El email ya está registrado"});
}
  }
  catch (error) {
    res.status(500).json({ message: errorresponse.data.message });
  }
}
else{
  if(req.method==="GET"){
    try{  
      const  datos=req.query
  if(datos.email && datos.password){


      const user = await Usuario.findOne({ include: {
        model: Permiso
      }, where: { email: datos.email } });

    if (user !== null) {
      if (await bcrypt.compare(datos.password, user.passwordhasheada))
      {
      res.json(user);}
      
      
      
      
      else{

        res.status(422).json({message:"La clave no coincide"});
      }
    }
    else{        res.status(422).json({message:"Usuario no registrado"});}}


  else{
    const misUsuarios = await Usuario.findAll();
    res.json(misUsuarios);
  }
  }


  catch (error) {
    res.status(500).json({ message: error.message });
  }
}}
}


module.exports = handleUsuarios;
