require('dotenv').config();
const Sequelize = require("sequelize");

//conexion bd

const sequelize = new Sequelize(
  process.env.DB_NOMBRE,
  process.env.DB_USUARIO,
  process.env.DB_CONTRASENHA,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PUERTO,
    dialect: 'mysql',
    timezone: "-05:00",
  }
);

module.exports = { sequelize };