const { Rst, } = require("../db.js");
const postRst = async (req, res) => {

  const  cargar=req.body
  console.log(cargar)

await Rst.bulkCreate(cargar);
    res.json(req.body);
  } 

module.exports = postRst;

