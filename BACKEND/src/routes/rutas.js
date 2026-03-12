const express = require("express");
const router = express.Router();
const proxyControlador = require('../proxy/proxyControlador');

//ver registros
router.get('/registros', proxyControlador.obtenerRegistros);

//crear registros
router.post('/crearregistro', proxyControlador.crearRegistro);

module.exports = router;