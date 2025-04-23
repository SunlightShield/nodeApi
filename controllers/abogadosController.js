const abogadoService = require('../services/abogadoServices');

exports.getAbogados = async (req, res) => {
  try {
    const abogados = await abogadoService.obtenerAbogados();
    res.status(200).json(abogados);
  } catch (err) {
    console.error('Error al obtener abogados:', err);
    res.status(500).json({ error: 'Error al obtener abogados' });
  }
};

exports.insertarAbogado = async (req, res) => {
  const { nombre, especialidad, universidad, email, telefono, activo } = req.body;

  if (!nombre || !especialidad || !universidad || !email || !telefono || !activo) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    await abogadoService.insertarAbogado(nombre, especialidad, universidad, email, telefono, activo);
    res.status(201).json({ message: 'abogado creado exitosamente' });
  } catch (err) {
    console.error('Error al crear abogado:', err);
    res.status(500).json({ error: 'Error al crear abogado' });
  }
};

exports.cambiarEstado = async (req, res) => {
  const { id } = req.params;
  const { activo } = req.body;

  if (typeof activo !== 'boolean') {
    return res.status(400).json({ error: 'El campo "activo" debe ser true o false' });
  }

  try {
    const resultado = await abogadoService.cambiarEstadoAbogado(parseInt(id), activo);

    if (resultado[0] === 0) {
      return res.status(404).json({ error: 'Abogado no encontrado' });
    }

    res.json({ message: `Abogado ${activo ? 'activado' : 'desactivado'} correctamente` });
  } catch (err) {
    console.error('Error al cambiar estado del abogado:', err);
    res.status(500).json({ error: 'Error al actualizar el estado' });
  }
};