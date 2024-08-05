const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin'
    password: '',
    port: 3306,
    database: 'dbbibliot',
    multipleStatements: true
})

db.connect((erro) => {
    if (erro){
        throw erro
}
console.log('conectado ao BD...')
});

global.db = db;
module.exports = db;