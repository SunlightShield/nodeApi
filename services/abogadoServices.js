const sql = require('../db');

async function obtenerAbogados() {
  const pool = await sql.connect();
  const result = await pool.request().query('SELECT * FROM Abogados');
  return result.recordset;
}

async function insertarAbogado(nombre, especialidad, universidad, email, telefono, activo) {
  const pool = await sql.connect();
  const result = await pool.request()
    .input('Nombre', sql.NVarChar(100), nombre)
    .input('Especialidad', sql.NVarChar(100), especialidad)
    .input('Universidad', sql.NVarChar(20), universidad)
    .input('Email', sql.NVarChar(100), email)
    .input('Telefono', sql.NVarChar(100), telefono)
    .input('Activo', sql.NVarChar(100), activo)
    .query(`
      INSERT INTO Abogados (Nombre, Especialidad, Universidad, Email, Telefono)
      VALUES (@nombre, @especialidad, @universidad, @email, @Telefono)
    `);
  return result.rowsAffected;
}

async function cambiarEstadoAbogado(id, activo) {
  const pool = await sql.connect();
  const result = await pool.request()
    .input('Id', sql.Int, id)
    .input('Activo', sql.Bit, activo)
    .query(`
      UPDATE Abogados
      SET Activo = @Activo
      WHERE Id = @Id
    `);

  return result.rowsAffected;
}

module.exports = {
  obtenerAbogados,
  insertarAbogado,
  cambiarEstadoAbogado
};
