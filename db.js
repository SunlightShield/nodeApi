// db.js
const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: false
  }
};

async function connectToDb() {
  try {
    await sql.connect(config);
    console.log('Conexión a SQL exitosa.');
  } catch (err) {
    console.error('Error al conectar a SQL:', err);
  }
}

connectToDb();

module.exports = sql;
