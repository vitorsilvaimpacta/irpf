const taskUsuario= require('../models/usuarioModels')

const getAll = async (_req, res) =>{
    const usuario = await taskUsuario.getAll();
    return res.status(200).json(usuario);
};

const createUsuario = async(req, res) =>{
    const createUsuario = await taskUsuario.createUsuario(req.body);
    return res.status(201).json(createUsuario);
}

const deleteUsuario = async(req, res) => {
    const { id } = req.params;
    await taskUsuario.deleteUsuario(id);
    return res.status(204).json();
}

const updateUsuario = async(req, res) => {
    const { id } = req.params;
    await taskUsuario.updateUsuario(id, req.body);
    return res.status(204).json();
}

const getUsuario = async(req, res) => {
    const { id } = req.params;
    const usuario = await taskUsuario.getUsuario(id);
    return res.status(200).json(usuario);
}

module.exports = {
    getAll,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    getUsuario
}