const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Venta = sequelize.define('venta', {
  cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: 'clientes',
      key: 'id',
    },
  },
  total: DataTypes.FLOAT,
}, {
  tableName: 'ventas',
});

module.exports = Venta;