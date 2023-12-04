const { Permiso, } = require("../db.js");
const postPermisos = async (req, res) => {

  console.log(req.body)

await Permiso.bulkCreate(req.body);
    res.json(req.body);
  } 

module.exports = postPermisos;