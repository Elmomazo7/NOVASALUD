const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Producto = sequelize.define('producto', {
  nombre: DataTypes.STRING,
  stock: DataTypes.INTEGER,
  precio: DataTypes.FLOAT,
}, {
  tableName: 'productos',
  timestamps: false,
});

module.exports = Producto;