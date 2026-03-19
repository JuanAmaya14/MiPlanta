const controller = require("../controller/controlador");

//capa antes de ir al controlador

const obtenerRegistros = async (req, res) => {
  try {
    const registros = await controller.getAllRegistros();
    res.json(registros);
  } catch (error) {
    console.error("Error en el controlador:", error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener registros", error: error.message });
  }
};

const crearRegistro = async (req, res) => {
  try {
    const resultado = await controller.postRegistro(req.body);
    if (resultado.error) {
      return res.status(400).json({ mensaje: resultado.error });
    }
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el registro",
      error: error.message || error,
    });
  }
};

const obtenerUltimoRegistro = async (req, res) => {
  try {
    const registro = await controller.getUltimoRegistro();
    res.json(registro);
  } catch (error) {
    console.error("Error en el controlador:", error);
    res
      .status(500)
      .json({
        mensaje: "Error al obtener el ultimo registro",
        error: error.message,
      });
  }
};

const DatosParaGrafica = async (req, res) => {
  try {
    const resultado = await controller.getDatosGrafica(req.query);
    if (resultado.error) {
      return res.status(400).json({ mensaje: resultado.error });
    }
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al consultar los datos para la grafica",
      error: error.message || error,
    });
  }
};

module.exports = {
  obtenerRegistros,
  crearRegistro,
  obtenerUltimoRegistro,
  DatosParaGrafica,
};
