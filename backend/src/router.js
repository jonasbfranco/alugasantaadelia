const express = require('express');

const router = express.Router();

const imoveisController = require('./controllers/imoveisController');
const imoveisMiddleware = require('./middlewares/imoveisMiddleware');

router.get('/imoveis', imoveisController.getAll);
router.post('/imoveis', imoveisMiddleware.validateFieldsPost, imoveisController.createImovel);
router.delete('/imoveis/:id', imoveisController.deleteImovel);
router.put('/imoveis/:id', 
            imoveisMiddleware.validateFieldsPost, 
            imoveisMiddleware.validateFieldsPut, 
            imoveisController.updateImovel);

module.exports = router;