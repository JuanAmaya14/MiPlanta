require('dotenv').config();
const Sequelize = require("sequelize");

//conexion bd

const sequelize = new Sequelize(
  process.env.DB_NOMBRE,
  process.env.DB_USUARIO,
  process.env.DB_CONTRASENHA,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

module.exports = { sequelize };