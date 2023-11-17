const mysql = require('mysql2');

const pool = mysql.createPool({
 host:'localhost',
 user:'root',
 database:'node-complete',
 password:'Hamlet#12@03'
});

module.exports =  pool.promise();