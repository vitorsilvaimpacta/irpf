const connection = require('./connection');

const getAll = async() => {
    const [cadastro] = await connection.execute('SELECT * FROM T_CADASTRO');
    return cadastro;
};

const getLast = async() => {
    const [cadastro] = await connection.execute('SELECT ID FROM T_CADASTRO ORDER BY ID DESC LIMIT 1');
    return cadastro;
};

const createCadastro = async(cadastro) => {
    const { name, dt_nascimento, telefone, login, senha, tipo } = cadastro;
    const query = 'INSERT INTO T_CADASTRO(name, dt_nascimento, telefone, login, senha, tipo) VALUES (?, ?, ?, ?, ?, ?)';
    const createCadastro = await connection.execute(query, [name, dt_nascimento, telefone, login, senha, tipo]);
    return {insertId: createCadastro.insertId};
}

const deleteCadastro = async(id) => {
    const removeCadastro = await connection.execute('DELETE FROM T_CADASTRO WHERE ID = ?', [id])
    return removeCadastro;
}

const updateCadastro = async(id, cadastro) => {
    const {name, dt_nascimento, telefone, login, senha, tipo} = cadastro;
    const updateCadastro = await connection.execute('UPDATE T_CADASTRO SET name = ?, dt_nascimento = ?, telefone = ?, login = ?, senha = ?, tipo = ? WHERE ID = ?', [name, dt_nascimento, telefone, login, senha, tipo, id])
    return updateCadastro;
}

const getLogin = async(id) => {
    const [login] = await connection.execute('SELECT * FROM T_CADASTRO WHERE login = ?', [id])
    return login;
}

module.exports = {
    getAll,
    createCadastro,
    deleteCadastro,
    updateCadastro,
    getLogin,
    getLast
};