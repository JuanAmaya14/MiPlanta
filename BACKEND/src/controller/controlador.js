const { sequelize } = require("../config/Conexiondb");

//controlador

const getAllRegistros = async () => {
  try {
    const resultados = await sequelize.query("CALL ListasRegistros;");
    return resultados;
  } catch (error) {
    console.error("Error en getAllRegistros:", error);
    throw error;
  }
};

const postRegistro = async (registro) => {
  const { humedad, temperatura } = registro;

  try {
    const [result] = await sequelize.query("CALL GuardarRegistro(?, ?)", {
      replacements: [humedad, temperatura],
    });

    return {
      resultado: result || null,
    };
  } catch (error) {
    console.error("Error en postRegistro:", error);
    throw error;
  }
};

const getUltimoRegistro = async () => {
  try {
    const resultado = await sequelize.query("CALL UltimoRegistro;");
    return resultado;
  } catch (error) {
    console.error("Error en getAllRegistros:", error);
    throw error;
  }
};

const getDatosGrafica = async (datos) => {
  const { tipoDato, fecha1, fecha2, todoPromedio } = datos;

  try {
    const resultados = await sequelize.query(
      "CALL obtenerDatosParaGrafica(?, ?, ?, ?)",
      {
        replacements: [tipoDato, fecha1, fecha2, todoPromedio],
      },
    );

    return resultados || null;
  } catch (error) {
    console.error("Error en obtenerDatosParaGrafica:", error);
    throw error;
  }
};

const getRangoFechas = async () => {
  try {
    const resultado = await sequelize.query("CALL ObtenerRangoFechas;");
    return resultado;
  } catch (error) {
    console.error("Error en ObtenerRangoFechas:", error);
    throw error;
  }
};

const getPromedios = async () => {
  try {
    const resultados = await sequelize.query("CALL obtenerPromedios;");
    return resultados;
  } catch (error) {
    console.error("Error en getAllRegistros:", error);
    throw error;
  }
};

module.exports = {
  getAllRegistros,
  postRegistro,
  getUltimoRegistro,
  getDatosGrafica,
  getRangoFechas,
  getPromedios,
};
