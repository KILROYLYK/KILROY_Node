const mysql = require('mysql'),
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'dbuser',
        password: 's3kreee7',
        database: 'my_db'
    });

module.exports = {
    server: connection,
    
};
// connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });
// connection.end();
