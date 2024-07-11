const taskCadastro = require('../models/cadastroModels')

const getAll = async (_req, res) =>{
    const cadastro = await taskCadastro.getAll();
    return res.status(200).json(cadastro);
};

const getLast = async (_req, res) =>{
    const cadastro = await taskCadastro.getLast();
    return res.status(200).json(cadastro);
};

const createCadastro = async(req, res) =>{
    const createCadastro = await taskCadastro.createCadastro(req.body);
    return res.status(201).json(createCadastro);
}

const deleteCadastro = async(req, res) => {
    const { id } = req.params;
    await taskCadastro.deleteCadastro(id);
    return res.status(204).json();
}

const updateCadastro = async(req, res) => {
    const { id } = req.params;
    await taskCadastro.updateCadastro(id, req.body);
    return res.status(204).json();
}

const getLogin = async(req, res) => {
    const { id } = req.params;
    const login = await taskCadastro.getLogin(id);
    return res.status(200).json(login);
}

module.exports = {
    getAll,
    createCadastro,
    deleteCadastro,
    updateCadastro,
    getLogin,
    getLast
}