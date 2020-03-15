const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database: 'burgers_db'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log (`connected as id ${connection.threadID}`);
  });

// var source = {
//     localhost:{
//         host: 'localhost',
//         port: 3306,
//         user: 'user',
//         password: process.env.PASSWORD,
//         database: 'burgers_db',
//     }
// };
// console.log(source.localhost)
// var connection = mysql.createConnection(source.localhost);

// connection.connect(function(err) {
//     if (err) {
//         console.error(" error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

module.exports = connection;
