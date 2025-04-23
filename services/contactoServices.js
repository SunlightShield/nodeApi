const  sql  = require('../db');

async function insertarContacto(nombre, email, telefono, mensaje) {
  const pool = await sql.connect();
  const result = await pool.request()
    .input('Nombre', sql.NVarChar(100), nombre)
    .input('Email', sql.NVarChar(100), email)
    .input('Telefono', sql.NVarChar(20), telefono)
    .input('Mensaje', sql.NVarChar(100), mensaje)
    .query(`
      INSERT INTO Contacto (Nombre, Email, Telefono, Mensaje)
      VALUES (@Nombre, @Email, @Telefono, @Mensaje)
    `);
  return result.rowsAffected;
}

async function obtenerContacto(){
  const pool = await sql.connect();
  const result = await pool.request().query('SELECT * FROM Contacto');
  return result.recordset;
}

module.exports = {
  insertarContacto,
  obtenerContacto
};
