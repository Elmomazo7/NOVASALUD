const Cliente = require('./cliente');
const Producto = require('./producto');
const Venta = require('./venta');
const DetalleVenta = require('./detalleVenta');

Venta.hasMany(DetalleVenta, { foreignKey: 'ventaId', as: 'detalles' });
DetalleVenta.belongsTo(Venta, { foreignKey: 'ventaId' });

Producto.hasMany(DetalleVenta, { foreignKey: 'productoId' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'productoId' });

module.exports = {
  Cliente,
  Producto,
  Venta,
  DetalleVenta
};