const connection = require('./connection');

const getAll = async() => {
    const [usuario] = await connection.execute('SELECT * FROM T_USUARIO');
    return usuario;
};

const createUsuario = async(usuario) => {
    const { cpf, civil, email, dependentes, profissao, fk_login } = usuario;
    const query = 'INSERT INTO T_USUARIO(cpf, civil, email, dependentes, profissao, fk_login) VALUES (?, ?, ?, ?, ?, ?)';
    const createUsuario = await connection.execute(query, [cpf, civil, email, dependentes, profissao, fk_login]);
    return {insertId: createUsuario.insertId};
}

const deleteUsuario = async(id) => {
    const removeUsuario = await connection.execute('DELETE FROM T_USUARIO WHERE ID = ?', [id])
    return removeUsuario;
}

const updateUsuario = async(id, usuario) => {
    const {cpf, civil, email, dependentes, profissao} = usuario;
    const updateUsuario = await connection.execute('UPDATE T_USUARIO SET cpf = ?, civil = ?, email = ?, dependentes = ?, profissao = ?, WHERE ID = ?', [cpf, civil, email, dependentes, profissao, id])
    return updateUsuario;
}

const getUsuario = async(id) => {
    const [usuario] = await connection.execute('SELECT U.*, C.name FROM T_USUARIO U, T_CADASTRO C WHERE  U.fk_login = C.id AND fk_login = ?', [id])
    return usuario;
}

module.exports = {
    getAll,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    getUsuario
};