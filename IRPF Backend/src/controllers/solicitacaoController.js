const taskSolicitacao= require('../models/solicitacaoModels')

const getAll = async (_req, res) =>{
    const solic = await taskSolicitacao.getAll();
    return res.status(200).json(solic);
};

const createSolicitacao = async(req, res) =>{
    const createSolicitacao = await taskSolicitacao.createSolicitacao(req.body);
    return res.status(201).json(createSolicitacao);
}

const deleteSolicitacao = async(req, res) => {
    const { id } = req.params;
    await taskSolicitacao.deleteSolicitacao(id);
    return res.status(204).json();
}

const updateSolicitacao = async(req, res) => {
    const { id } = req.params;
    await taskSolicitacao.updateSolicitacao(id, req.body);
    return res.status(204).json();
}

const getSolicitacao = async(req, res) => {
    const { id } = req.params;
    const solic = await taskSolicitacao.getSolicitacao(id);
    return res.status(200).json(solic);
}

const getAtendimento = async(req, res) => {
    const { id } = req.params;
    const solic = await taskSolicitacao.getAtendimento(id);
    return res.status(200).json(solic);
}

const getSolicEspecialista = async(req, res) => {
    const { id } = req.params;
    const solic = await taskSolicitacao.getSolicEspecialista(id);
    return res.status(200).json(solic);
}

module.exports = {
    getAll,
    createSolicitacao,
    deleteSolicitacao,
    updateSolicitacao,
    getSolicitacao,
    getSolicEspecialista,
    getAtendimento
}