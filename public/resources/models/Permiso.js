const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("permiso", {
    id: { type: DataTypes.STRING, allowNull: false,primaryKey: true},
    zona: { type: DataTypes.STRING, allowNull:false       },
    rol: { type: DataTypes.STRING},
  });
}