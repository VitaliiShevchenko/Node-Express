const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    password: 'pass',
    host: 'localhost',
    port: 5432,
    database: ""
})

module.exports = pool