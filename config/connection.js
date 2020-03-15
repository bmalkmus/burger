const mysql = require('mysql');
require('dotenv').config();

console.log(process.env.PASSWORD)

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
connection = mysql.createConnection({
    host : 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORDDB,
    database: 'burgers_db'
})
};

connection.connect(function(err) {
    if (err) throw err;
    console.log (`connected as id ${connection.threadID}`);
  });


module.exports = connection;
