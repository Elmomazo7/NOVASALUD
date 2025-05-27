const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Cliente = sequelize.define('cliente', {
  nombre: DataTypes.STRING,
  telefono: DataTypes.STRING,
}, {
  tableName: 'clientes',
  timestamps: false,
});

module.exports = Cliente;