const { Producto } = require('../models');

exports.getAll = async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};