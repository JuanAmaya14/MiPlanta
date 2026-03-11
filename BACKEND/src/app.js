const express = require("express");
const { sequelize } = require("./config/Conexiondb");
const rutas = require("./routes/rutas");

const app = express();

app.use(express.json());

app.set("host", process.env.APP_HOST);
app.set("port", process.env.APP_PORT);

// Registrar modelos antes de sincronizar la base de datos
require("./models/registroModel");

async function IniciarApp() {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");

    await sequelize.sync({ force: false });
    console.log("Base de datos sincronizada");

    app.use("/", rutas);

    app.listen(app.get("port"), () => {
      console.log(
        `Servidor corriendo en: http://${app.get("host")}:${app.get("port")}`,
      );
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

IniciarApp();
