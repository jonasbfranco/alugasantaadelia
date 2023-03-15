const express = require('express');
const imoveisController = require('./controllers/imoveisController');

const router = express.Router();

router.get('/imoveis', imoveisController.getAll);

module.exports = router;