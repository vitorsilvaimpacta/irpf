const connection = require('./connection');

const getAll = async() => {
    const [tasks] = await connection.execute('SELECT * FROM TASKS');
    return tasks;
};

const createTask = async(task) => {
    const { title} = task;
    const dataUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO TASKS(title, status, created_at) VALUES (?, ?, ?)';
    const createdTask = await connection.execute(query, [title, 'pendente', dataUTC]);
    return {insertId: createdTask.insertId};
}

const deleteTask = async(id) => {
    const removeTask = await connection.execute('DELETE FROM TASKS WHERE ID = ?', [id])
    return removeTask;
}

const updateTask = async(id, task) => {
    const {title, status} = task;
    const updateTask = await connection.execute('UPDATE TASKS SET TITLE = ?, STATUS = ? WHERE ID = ?', [title, status, id])
    return updateTask;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};