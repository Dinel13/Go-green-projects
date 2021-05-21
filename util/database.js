const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'g-project',
    password : 'Dinelos5!'
})

module.exports = pool.promise()