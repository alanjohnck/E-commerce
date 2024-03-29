const { Pool } = require('pg');
const{response} = require('express');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    port:5432,
    database:"employeDB"
});

module.exports = pool;