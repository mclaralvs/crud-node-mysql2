(async () => {
    const db = require('./db')

    // CREATE USUÁRIO
    console.log('INSERT INTO usuario');
    const result = await db.insertUser({user_nome: 'Livia', user_idade: 17, user_uf: 'SP'});
    console.log(result);

    // UPDATE USUÁRIO
    console.log('UPDATE INTO usuario');
    const result2 = await db.updateUser(1, {user_nome: 'Clara', user_idade: 22, user_uf: 'RJ'}) 
    console.log(result2);

    // DELETE USUÁRIO
    console.log('DELETE FROM usuario');
    const result3 = await db.deleteUser(4) 
    console.log(result3);
 
    // READ USUÁRIO
    console.log('SELECT * FROM usuario');
    const usuario = await db.selectUsers();
    console.log(usuario);

    // CREATE PEDIDO
    console.log('INSERT INTO pedido');
    const result4 = await db.insertRequest ({ped_nome: 'Shampoo', ped_preco: 17.40, ped_categoria: 'Beleza'});
    console.log(result4);

    // UPDATE PEDIDO
    console.log('UPDATE INTO pedido');
    const result5 = await db.updateRequest(1, {ped_nome: 'Condicionador', ped_preco: 20.40, ped_categoria: 'Beleza'}) 
    console.log(result5);   
    
    // READ PEDIDO
    console.log('SELECT * FROM pedido');
    const pedido = await db.selectRequests();
    console.log(pedido);
    
    // DELETE PEDIDO
    console.log('DELETE FROM pedido');
    const result6 = await db.deleteRequest(4) 
    console.log(result6);
    
}) ();
