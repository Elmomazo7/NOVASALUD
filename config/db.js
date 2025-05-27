const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './nova-salud.sqlite'
});

module.exports = { sequelize };