const express = require('express');
const router = express.Router();

const productoRoutes = require('./producto');
const clienteRoutes = require('./cliente');
const ventaRoutes = require('./venta');

router.use('/productos', productoRoutes);
router.use('/clientes', clienteRoutes);
router.use('/ventas', ventaRoutes);

module.exports = router;