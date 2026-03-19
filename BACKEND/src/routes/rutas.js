const express = require("express");
const router = express.Router();
const proxyControlador = require("../proxy/proxyControlador");

//ver registros
router.get("/registros", proxyControlador.obtenerRegistros);

//crear registros
router.post("/crearregistro", proxyControlador.crearRegistro);

//ver ultimo registro
router.get("/ultimoregistro", proxyControlador.obtenerUltimoRegistro);

//ver datos para la grafica (humedad o temperatura y los ultimos dias)
router.get("/datosGrafica", proxyControlador.DatosParaGrafica);

module.exports = router;
