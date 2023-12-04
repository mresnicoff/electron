const { Sf} = require("../db.js");
const countResumen = async (req, res) => {

var numero=req.query.numero
if (numero){
  const count = await Sf.findAll(
    {where:{fechacierre:"",submotivo:"Solicitud de Certificado Demolición" }},
  );
var demoras=count.map(fila=>({cliente:fila.cliente, direccion:fila.direccion, caso:fila.caso, estado:fila.desc_estado, dias: Math.floor((Date.now()-new Date(fila.fechaapertura))/(1000*60*60*24))}))
console.log(demoras)
const menoresA30=demoras.filter(line=>line.dias<30 ).length
const listam30=demoras.filter(line=>line.dias<30 ).sort(function (a, b) {
  if (a.dias > b.dias) {
    return 1;
  }
  if (a.dias < b.dias) {
    return -1;
  }
  return 0;
});
const menoresA60=demoras.filter(line=>line.dias<60 && line.dias>=30).length
const listam60=demoras.filter(line=>line.dias<60 && line.dias>=30).sort(function (a, b) {
  if (a.dias > b.dias) {
    return 1;
  }
  if (a.dias < b.dias) {
    return -1;
  }
  return 0;
});
const menoresA90=demoras.filter(line=>line.dias<90 && line.dias>=60).length
const listam90=demoras.filter(line=>line.dias<90 && line.dias>=60).sort(function (a, b) {
  if (a.dias > b.dias) {
    return 1;
  }
  if (a.dias < b.dias) {
    return -1;
  }
  return 0;
});
const mayoresA90=demoras.filter(line=>line.dias>=90).length
const listaM90=demoras.filter(line=>line.dias>=90).sort(function (a, b) {
  if (a.dias > b.dias) {
    return 1;
  }
  if (a.dias < b.dias) {
    return -1;
  }
  return 0;
});
console.log({menoresA30:menoresA30, listam30:listam30,menoresA60:menoresA60, listam60:listam60, menoresA90:menoresA90, listam90:listam90,mayoresA90:mayoresA90, listaM90})
    res.json({menoresA30:menoresA30,listam30:listam30,menoresA60:menoresA60,listam60:listam60,menoresA90:menoresA90,listam90:listam90, mayoresA90:mayoresA90, listaM90:listaM90});
  } }

module.exports = countResumen;
