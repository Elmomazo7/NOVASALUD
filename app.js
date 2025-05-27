const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./config/db');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', routes);

sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos conectada');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => console.error('Error al conectar la base de datos:', err));