const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'rs4b7reg',
  password: 'password', 
  port: 5432, // default port for postgres
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};