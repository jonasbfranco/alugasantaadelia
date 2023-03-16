const imoveisModel = require('../models/imoveisModel');

const getAll = async (_req, res) => {
    const imoveis = await imoveisModel.getAll();
    return res.status(200).json(imoveis);
};

const createImovel = async (req, res) => {
    const createdImovel = await imoveisModel.createImovel(req.body);
    return res.status(201).json(createdImovel);
};

module.exports = {
    getAll,
    createImovel,
};