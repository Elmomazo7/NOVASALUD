const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const DetalleVenta = sequelize.define('detalle_venta', {
  ventaId: {
    type: DataTypes.INTEGER,
    references: { model: 'ventas', key: 'id' }
  },
  productoId: {
    type: DataTypes.INTEGER,
    references: { model: 'productos', key: 'id' }
  },
  cantidad: DataTypes.INTEGER,
  precio_unitario: DataTypes.FLOAT,
}, {
  tableName: 'detalle_ventas',
  timestamps: false,
});

module.exports = DetalleVenta;