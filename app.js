require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api/abogados', require('./routes/abogados'));
app.use('/api/contactos', require('./routes/contactos'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
