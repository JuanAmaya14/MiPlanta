const { sequelize } = require("../config/Conexiondb");


const getAllRegistros = async (req, res) => {
  try {
    const [resultados] = await sequelize.query("CALL ListasRegistros;");
    res.json(resultados);
  } catch (error) {
    console.error("Error en getAllRegistros:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRegistros,
};
