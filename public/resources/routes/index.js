const { Router } = require("express");
const countResumen = require("../controllers/countResumen.js");
const postDatos = require("../controllers/postDatos.js");
const postRst = require("../controllers/postRst.js");
const postSap = require("../controllers/postSap.js");
const postestados = require("../controllers/postEstado.js");
const getDatos = require("../controllers/getDatos.js");
const CerradoRstconServicioBaja = require("../controllers/CerradosRstconServicioBaja.js");
const fechaRST = require("../controllers/fechaRST.js");
const getDatosBaja = require("../controllers/getDatosBaja.js");
const getDatosRst = require("../controllers/getDatosRst.js");
const getDatosSap = require("../controllers/getDatosSap.js");
const handleUsuarios = require("../controllers/handleUsuarios.js");
const postPermisos = require("../controllers/postPermisos.js");
const getPermisos = require("../controllers/getPermisos.js");
const getUsuario = require("../controllers/getUsuario.js");
const asignarPermisos = require("../controllers/asignarPermisos.js");
const deleteDatos = require("../controllers/deletetDatos.js");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.post("/datos", postDatos);
router.post("/sap", postSap);
router.post("/rst", postRst);
router.post("/estado", postestados);
router.get("/getdatos", getDatos);
router.get("/contar", countResumen);
router.get("/fecharst", fechaRST);
router.get("/getdatosBaja", getDatosBaja);
router.get("/getdatosRst", getDatosRst);
router.get("/getdatosSap", getDatosSap);
router.post("/usuarios", handleUsuarios);
router.get("/usuarios", handleUsuarios);
router.post("/permisos", postPermisos);
router.get("/permisos", getPermisos);
router.get("/filtro1", CerradoRstconServicioBaja);
router.get("/esteusuario", getUsuario);
router.post("/asignarpermisos", asignarPermisos);
router.delete("/datos", deleteDatos);

// Ejemplo: router.use('/auth', authRouter);

module.exports = router;