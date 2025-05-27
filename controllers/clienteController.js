const { Cliente } = require('../models');

exports.getAll = async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Cliente.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};