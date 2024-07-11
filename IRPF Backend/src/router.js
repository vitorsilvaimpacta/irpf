const express = require('express')
const taskController = require('./controllers/taskController')
const taskMiddleware = require ('./middleware/taskMiddleware')
const cadastroController = require('./controllers/cadastroController')
const usuarioController = require('./controllers/usuarioController')
const especialistaController = require('./controllers/especialistaController')
const solicitacaoController = require('./controllers/solicitacaoController')

const router = express.Router()

//Tasks
router.get('/task', taskController.getAll);
router.post('/task', taskMiddleware.validateTitle,taskController.createTask);
router.delete('/task/:id', taskController.deleteTask);
router.put('/task/:id', taskMiddleware.validateFieldStatus,taskMiddleware.validateTitle, taskController.updateTask);

//Cadastros
router.get('/cadastro', cadastroController.getAll);
router.get('/cadastrolast', cadastroController.getLast);
router.get('/cadastro/:id', cadastroController.getLogin);
router.post('/cadastro', cadastroController.createCadastro);
router.delete('/cadastro/:id', cadastroController.deleteCadastro);
router.put('/cadastro/:id', cadastroController.updateCadastro);

//Usuário
router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:id', usuarioController.getUsuario);
router.post('/usuario', usuarioController.createUsuario);
router.delete('/usuario/:id', usuarioController.deleteUsuario);
router.put('/usuario/:id', usuarioController.updateUsuario);

//Especialista
router.get('/especialista', especialistaController.getAll);
router.get('/especialista/:id', especialistaController.getEspecialista);
router.post('/especialista', especialistaController.createEspecialista);
router.delete('/especialista/:id', especialistaController.deleteEspecialista);
router.put('/especialista/:id', especialistaController.updateEspecialista);

//Solicitacao
router.get('/solicitacao', solicitacaoController.getAll);
router.get('/solicitacao/especialista/:id', solicitacaoController.getSolicEspecialista);
router.get('/solicitacao/:id', solicitacaoController.getSolicitacao);
router.get('/solicitacao/atendimento/:id', solicitacaoController.getAtendimento);
router.post('/solicitacao', solicitacaoController.createSolicitacao);
router.delete('/solicitacao/:id', solicitacaoController.deleteSolicitacao);
router.put('/solicitacao/:id', solicitacaoController.updateSolicitacao);

module.exports = router;
