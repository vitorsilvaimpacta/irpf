const connection = require('./connection');

const getAll = async() => {
    const [id] = await connection.execute('SELECT S.*, C.name, C.telefone, U.cpf, U.email, U.dependentes, U.profissao FROM T_SOLICITACAO S, T_CADASTRO C, T_USUARIO U WHERE S.fk_usuario = C.id AND U.fk_login = C.id AND S.id_especialista IS NULL LIMIT 100');
    return id;
};

const createSolicitacao = async(id) => {
    const { data, titulo, descricao, status, fk_usuario } = id;
    const query = 'INSERT INTO T_SOLICITACAO(data, titulo, descricao, status, fk_usuario) VALUES (?, ?, ?, ?, ?)';
    const createSolicitacao = await connection.execute(query, [data, titulo, descricao, status, fk_usuario]);
    return {insertId: createSolicitacao.insertId};
}

const deleteSolicitacao = async(id) => {
    const removeSolicitacao = await connection.execute('DELETE FROM T_SOLICITACAO WHERE ID = ?', [id])
    return removeSolicitacao;
}

const updateSolicitacao = async(id, solic) => {
    const {id_especialista, desc_especialista, status} = solic;
    const updateSolicitacao = await connection.execute('UPDATE T_SOLICITACAO SET id_especialista = ?, desc_especialista = ?, status = ? WHERE ID = ?', [id_especialista, desc_especialista, status, id])
    return updateSolicitacao;
}

const getSolicitacao = async(id) => {
    const [solic] = await connection.execute('SELECT S.*, C.name, C.telefone FROM T_SOLICITACAO S, T_CADASTRO C WHERE S.fk_usuario = C.id AND S.fk_usuario = ?', [id])
    return solic;
}

const getAtendimento = async(id) => {
    const [solic] = await connection.execute('SELECT S.*, C.name, C.telefone FROM T_SOLICITACAO S, T_CADASTRO C WHERE S.id_especialista = C.id AND S.fk_usuario = ? AND S.status = "Em atendimento" LIMIT 1', [id])
    return solic;
}


const getSolicEspecialista = async(id) => {
    const [solic] = await connection.execute('SELECT S.*, C.name, C.telefone FROM T_SOLICITACAO S, T_CADASTRO C WHERE S.fk_usuario = C.id AND S.id_especialista = ?', [id])
    return solic;
}

module.exports = {
    getAll,
    createSolicitacao,
    deleteSolicitacao,
    updateSolicitacao,
    getSolicitacao,
    getSolicEspecialista,
    getAtendimento
};