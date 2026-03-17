const express = require("express");
const { sequelize } = require("./config/Conexiondb");
const rutas = require("./routes/rutas");
const cors = require("cors");

const app = express();

app.use(express.json());

app.set("AppHost", process.env.APP_HOST);
app.set("AppPort", process.env.APP_PORT);
app.set("FrontHost", process.env.FRONT_HOST);
app.set("FrontPort", process.env.FRONT_PORT);

app.use(
  cors({
    origin: `http://${app.get("FrontHost")}:${app.get("FrontPort")}`,
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
);

// Registrar modelos antes de sincronizar la base de datos
require("./models/registroModel");

async function IniciarApp() {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");

    await sequelize.sync({ force: false });
    console.log("Base de datos sincronizada");

    app.use("/", rutas);

    app.listen(app.get("AppPort"), () => {
      console.log(
        `Servidor corriendo en: http://${app.get("AppHost")}:${app.get("AppPort")}`,
      );
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

IniciarApp();
