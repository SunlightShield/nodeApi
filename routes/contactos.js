const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactosController');

router.post('/', contactoController.crearContacto);
router.get('/', contactoController.getContacto);

module.exports = router;
