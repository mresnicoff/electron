const { Sap, } = require("../db.js");
const postSap = async (req, res) => {

  const  cargar=req.body
  console.log(cargar)

await Sap.bulkCreate(cargar);
    res.json(req.body);
  } 

module.exports = postSap;