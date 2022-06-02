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

// CREATE USUÁRIO
async function insertUser(user) {
    const conn = await connect();
    const sql = 'INSERT INTO usuario (user_nome, user_idade, user_uf) VALUES (?, ?, ?);';
    const values = [user.user_nome, user.user_idade, user.user_uf];
    return await conn.query(sql, values);
}

// READ USUÁRIO
async function selectUsers() {
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM usuario;');
    return rows;
};

// UPDATE USUÁRIO
async function updateUser(id, user) {
    const conn = await connect();
    const sql = 'UPDATE usuario SET user_nome = ?, user_idade = ?, user_uf = ? WHERE user_id = ?;';
    const values = [user.user_nome, user.user_idade, user.user_uf, id];
    return await conn.query(sql, values);
};

// DELETE USUÁRIO
async function deleteUser(id) {
    const conn = await connect();
    const sql = 'DELETE FROM usuario WHERE user_id = ?;';
    return await conn.query(sql, [id]);
}; 


// CREATE PEDIDO
async function insertRequest(req) {
    const conn = await connect();
    const sql = 'INSERT INTO pedido (ped_nome, ped_preco, ped_categoria) VALUES (?, ?, ?);';
    const values = [req.ped_nome, req.ped_preco, req.ped_categoria];
    return await conn.query(sql, values);
}

// READ PEDIDO
async function selectRequests() {
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM pedido;');
    return rows;
};

// UPDATE PEDIDO
async function updateRequest(id, req) {
    const conn = await connect();
    const sql = 'UPDATE pedido SET ped_nome = ?, ped_preco = ?, ped_categoria = ? WHERE ped_id = ?;';
    const values = [req.ped_nome, req.ped_preco, req.ped_categoria, id];
    return await conn.query(sql, values);
};

// DELETE PEDIDO
async function deleteRequest(id) {
    const conn = await connect();
    const sql = 'DELETE FROM pedido WHERE ped_id = ?;';
    return await conn.query(sql, [id]);
}; 

module.exports = { selectUsers, insertUser, updateUser, deleteUser, insertRequest, selectRequests, updateRequest, deleteRequest }