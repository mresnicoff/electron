
const { DataTypes, TimeoutError } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("estado", {
    StatusUsuario: { type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true }, 
   descripcion: { type: DataTypes.STRING, allowNull: true , unique: false}, 
   

  });
};



