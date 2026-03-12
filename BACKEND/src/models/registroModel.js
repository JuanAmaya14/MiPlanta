const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/Conexiondb");

if (!sequelize) {
  throw new Error("Error: La conexión con la base de datos no está definida");
}

//tabla de la bd

const registro = sequelize.define(
  "registro",
  {
    idRegistro: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    humedad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    temperatura: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "registro",
    timestamps: false
  }
);

module.exports = registro;
