const express = require("express");
const { sequelize } = require("./config/Conexiondb");
const rutas = require("./routes/rutas");

const app = express();
const port = 3000;
const ip = "localhost";

app.use(express.json());

// Registrar modelos antes de sincronizar la base de datos
require("./models/registroModel");

async function IniciarApp() {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");

    await sequelize.sync({ force: false });
    console.log("Base de datos sincronizada");

    app.use("/", rutas);

    app.listen(port, () => {
      console.log(`http://${ip}:${port}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

IniciarApp();
