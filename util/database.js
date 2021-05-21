const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'gproject',
    password : 'Dinelos5!'
})

module.exports = pool.promise()