const { Pool } = require("pg");

const client = new Pool({
    user:'postgres',
    database: 'join_db',
    port: 5432,
    password: "01023dk",
    host: 'localhost'
});

client.connect()

module.exports = client;