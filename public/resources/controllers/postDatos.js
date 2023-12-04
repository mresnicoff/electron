const { Sf, } = require("../db.js");
const postDatos = async (req, res) => {

  const  cargar=req.body
  console.log(cargar)

await Sf.bulkCreate(cargar);
    res.json(req.body);
  } 

module.exports = postDatos;
