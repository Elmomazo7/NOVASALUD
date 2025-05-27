const { Venta, DetalleVenta } = require('../models');

exports.create = async (req, res) => {
  const { cliente, total, detalles } = req.body;

  try {
    const nuevaVenta = await Venta.create({ cliente, total });
    for (const item of detalles) {
      await DetalleVenta.create({
        ventaId: nuevaVenta.id,
        productoId: item.productoId,
        cantidad: item.cantidad,
        precio_unitario: item.precio_unitario,
      });
    }
    res.status(201).json({ message: 'Venta registrada correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};