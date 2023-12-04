const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("usuario", {
    Nombre: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull:false,        primaryKey: true, },
    passwordhasheada: { type: DataTypes.STRING},
  });
}