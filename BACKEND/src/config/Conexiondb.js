const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'miplantadb',
 '',
 '',
  {
    host: '',
    dialect: 'mysql'
  }
);

module.exports = { sequelize };