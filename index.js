(async () => {
    const db = require('./db')

    // CREATE
    console.log('INSERT INTO usuario');
    const result = await db.insertUser({user_nome: 'Livia', user_idade: 17, user_uf: 'SP'});
    console.log(result);

    // UPDATE
    console.log('UPDATE INTO usuario');
    const result2 = await db.updateUser(1, {user_nome: 'Clara', user_idade: 22, user_uf: 'RJ'}) 
    console.log(result2);

    // UPDATE
    console.log('DELETE FROM usuario');
    const result3 = await db.deleteUser(4) 
    console.log(result3);
 
    // READ
    console.log('SELECT * FROM usuario');
    const usuario = await db.selectUsers();
    console.log(usuario);

}) ();
