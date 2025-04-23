const express = require('express');
const router = express.Router();
const abogadosController = require('../controllers/abogadosController');

router.get('/', abogadosController.getAbogados);
router.post('/', abogadosController.insertarAbogado)
router.patch('/:id/estado', abogadosController.cambiarEstado);
module.exports = router;