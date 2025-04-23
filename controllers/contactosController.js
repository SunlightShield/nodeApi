const contactoService = require('../services/contactoServices');

exports.crearContacto = async (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !telefono || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    await contactoService.insertarContacto(nombre, email, telefono, mensaje);
    res.status(201).json({ message: 'Contacto creado exitosamente' });
  } catch (err) {
    console.error('Error al crear contacto:', err);
    res.status(500).json({ error: 'Error al crear contacto' });
  }
};

exports.getContacto = async (req, res) => {
  try {
    const contacto = await contactoService.obtenerContacto();
    res.status(200).json(contacto);
  } catch (err) {
    console.error('Error al obtener contactos:', err);
    res.status(500).json({ error: 'Error al obtener contactos' });
  }
};
