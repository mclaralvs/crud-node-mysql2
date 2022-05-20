const mysql = require('mysql2/promise');

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') 
        return global.connection;
    

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'crud'
    });

    console.log('Database connected!');;
    global.connection = connection;
    return global.connection;
}

// CREATE
async function insertUser(user) {
    const conn = await connect();
    const sql = 'INSERT INTO usuario (user_nome, user_idade, user_uf) VALUES (?, ?, ?);';
    const values = [user.user_nome, user.user_idade, user.user_uf];
    return await conn.query(sql, values);
}

// READ
async function selectUsers() {
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM usuario;');
    return rows;
};

// UPDATE
async function updateUser(id, user) {
    const conn = await connect();
    const sql = 'UPDATE usuario SET user_nome = ?, user_idade = ?, user_uf = ? WHERE user_id = ?;';
    const values = [user.user_nome, user.user_idade, user.user_uf, id];
    return await conn.query(sql, values);
};

// DELETE
async function deleteUser(id) {
    const conn = await connect();
    const sql = 'DELETE FROM usuario WHERE user_id = ?;';
    return await conn.query(sql, [id]);
};

module.exports = { selectUsers, insertUser, updateUser, deleteUser }