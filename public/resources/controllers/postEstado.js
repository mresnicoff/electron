const { Estado, } = require("../db.js");
const postEstados = async (req, res) => {

  console.log(req.body)

await Estado.bulkCreate(req.body);
    res.json(req.body);
  } 

module.exports = postEstados;