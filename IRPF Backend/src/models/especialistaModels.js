const connection = require('./connection');

const getAll = async() => {
    const [especialista] = await connection.execute('SELECT * FROM T_ESPECIALISTA');
    return especialista;
};

const createEspecialista = async(especialista) => {
    const { especializacao, formacao, disponibilidade, preco, pix, fk_login } = especialista;
    const query = 'INSERT INTO T_ESPECIALISTA(especializacao, formacao, disponibilidade, preco, pix, fk_login) VALUES (?, ?, ?, ?, ?, ?)';
    const createEspecialista = await connection.execute(query, [especializacao, formacao, disponibilidade, preco, pix, fk_login]);
    return {insertId: createEspecialista.insertId};
}

const deleteEspecialista = async(id) => {
    const removeEspecialista = await connection.execute('DELETE FROM T_ESPECIALISTA WHERE ID = ?', [id])
    return removeEspecialista;
}

const updateEspecialista = async(id, especialista) => {
    const {especializacao, formacao, disponibilidade, preco, pix} = especialista;
    const updateEspecialista = await connection.execute('UPDATE T_ESPECIALISTA SET especializacao = ?, formacao = ?, disponibilidade = ?, preco = ?, pix = ?, WHERE ID = ?', [especializacao, formacao, disponibilidade, preco, pix, id])
    return updateEspecialista;
}

const getEspecialista = async(id) => {
    const [especialista] = await connection.execute('SELECT C.name FROM T_ESPECIALISTA E, T_CADASTRO C WHERE E.fk_login = C.id AND fk_login = ? LIMIT 100', [id])
    return especialista;
}

module.exports = {
    getAll,
    createEspecialista,
    deleteEspecialista,
    updateEspecialista,
    getEspecialista
};