
const { DataTypes, TimeoutError } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("rst", {
   Zona: { type: DataTypes.STRING, allowNull: true }, 
   Ubicacion: { type: DataTypes.STRING, allowNull: true }, 
   Servicio: { type: DataTypes.STRING, allowNull: true }, 
   ReqObraCliente: { type: DataTypes.STRING, allowNull: true }, 
   Partido: { type: DataTypes.STRING, allowNull: true }, 
   OrigenPedido: { type: DataTypes.STRING, allowNull: true },
   ObservacionesDeLaUltimaDerivacion: { type: DataTypes.STRING(2000), allowNull: true },
   NrodeAvisoOrden: { type: DataTypes.STRING, allowNull: true }, 
   NroMensajeNroDocOrigen: { type: DataTypes.STRING, allowNull: true }, 
   NroPIT: { type: DataTypes.STRING, allowNull: true },   
   NroDocOrigenSolicitud: { type: DataTypes.STRING, allowNull: true },
   NroCliente: { type: DataTypes.STRING, allowNull: true },
   MotivoOrigen: { type: DataTypes.STRING, allowNull: true },
   Localidad: { type: DataTypes.STRING, allowNull: true },
   FechadelaUltimaDerivacion: { type: DataTypes.STRING, allowNull: true },
   FechadeRespuesta: { type: DataTypes.STRING, allowNull: true },
   FechadeRealizaciondelTrabajo: { type: DataTypes.STRING, allowNull: true },
   FechaVencPedido: { type: DataTypes.DATEONLY, allowNull: true },
   FechaIngresoProveedor: { type: DataTypes.STRING, allowNull: true },
   FechaIngresoCliente: { type: DataTypes.STRING, allowNull: true },
   EstadodeSolicitud: { type: DataTypes.STRING, allowNull: true },
   Estado: { type: DataTypes.STRING, allowNull: true },
   CostoTotalReal: { type: DataTypes.STRING, allowNull: true },
   CostoTotal: { type: DataTypes.STRING, allowNull: true },
   Cliente: { type: DataTypes.STRING, allowNull: true },
   Calle: { type: DataTypes.STRING, allowNull: true },
    

  });
};



