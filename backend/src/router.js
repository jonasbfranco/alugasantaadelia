const express = require('express');

const router = express.Router();

const imoveisController = require('./controllers/imoveisController');
const imoveisMiddleware = require('./middlewares/imoveisMiddleware');

router.get('/', (req, res) => {
    const teste = [
        {
            "status": "App funcionando com volumes na porta 3306",
        }
    ];
    return res.status(200).json(teste);
});

router.get('/imoveis', imoveisController.getAll);
router.post('/imoveis', imoveisMiddleware.validateFieldsPost, imoveisController.createImovel);
router.delete('/imoveis/:id', imoveisController.deleteImovel);
router.put('/imoveis/:id', 
            imoveisMiddleware.validateFieldsPost, 
            imoveisMiddleware.validateFieldsPut, 
            imoveisController.updateImovel);
router.get('/imoveis/:title', imoveisController.searchImovel);
router.get('/detalhes/:id', imoveisController.searchOneImovel);

module.exports = router;