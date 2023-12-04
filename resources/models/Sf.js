const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("sf", {
    motivo: { type: DataTypes.STRING, allowNull: true},
    submotivo: { type: DataTypes.STRING, allowNull: true },
    numerosuministro: { type: DataTypes.INTEGER },
    cliente: { type: DataTypes.INTEGER, allowNull: true },
    direccion:{ type: DataTypes.STRING, allowNull: true },
    caso: { type: DataTypes.INTEGER, allowNull: true },
    desc_estado: { type: DataTypes.STRING, allowNull: true },
    fechaapertura:{ type: DataTypes.STRING, allowNull: true },
    fechacierre: { type: DataTypes.STRING, allowNull: true },
    observaciones:{ type: DataTypes.STRING(4000), allowNull: true }

  });
};