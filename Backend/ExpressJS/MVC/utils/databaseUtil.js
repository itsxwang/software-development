const mysql = require("mysql2");

require('dotenv').config(); // Load variables from .env

// create pool of connections
exports.homesDb = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.HOMES_DATABASE,
}).promise();
