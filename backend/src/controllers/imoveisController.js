const imoveisModel = require('../models/imoveisModel');

const getAll = async (_req, res) => {
    const imoveis = await imoveisModel.getAll();
    return res.status(200).json(imoveis);
};

const createImovel = async (req, res) => {
    const createdImovel = await imoveisModel.createImovel(req.body);
    return res.status(201).json(createdImovel);
};

const deleteImovel = async (req, res) => {
    const {id} = req.params;

    await imoveisModel.deleteImovel(id);
    return res.status(204).json();
};

const updateImovel = async (req, res) => {
    const {id} = req.params;

    await imoveisModel.updateImovel(id, req.body);
    const log = console.log(req.body);
    return res.status(204).json(); 
};

const searchImovel = async (req, res) => {
    const {id} = req.params;

    const imoveis = await imoveisModel.searchImovel(id, req.body);
    return res.status(200).json(imoveis);
};


module.exports = {
    getAll,
    createImovel,
    deleteImovel,
    updateImovel,
    searchImovel,
};