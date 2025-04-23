require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({
origin: 'http://localhost:3000'
}));
// Rutas
app.use('/api/abogados', require('./routes/abogados'));
app.use('/api/contactos', require('./routes/contactos'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
