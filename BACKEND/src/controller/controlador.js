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
    console.error("Error en postRegistro (SP):", error);
    throw error;
  }
};

module.exports = {
  getAllRegistros,
  postRegistro,
};
