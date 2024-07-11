const taskEspecialista= require('../models/especialistaModels')

const getAll = async (_req, res) =>{
    const especialista = await taskEspecialista.getAll();
    return res.status(200).json(especialista);
};

const createEspecialista = async(req, res) =>{
    const createEspecialista = await taskEspecialista.createEspecialista(req.body);
    return res.status(201).json(createEspecialista);
}

const deleteEspecialista = async(req, res) => {
    const { id } = req.params;
    await taskEspecialista.deleteEspecialista(id);
    return res.status(204).json();
}

const updateEspecialista = async(req, res) => {
    const { id } = req.params;
    await taskEspecialista.updateEspecialista(id, req.body);
    return res.status(204).json();
}

const getEspecialista = async(req, res) => {
    const { id } = req.params;
    const especialista = await taskEspecialista.getEspecialista(id);
    return res.status(200).json(especialista);
}

module.exports = {
    getAll,
    createEspecialista,
    deleteEspecialista,
    updateEspecialista,
    getEspecialista
}