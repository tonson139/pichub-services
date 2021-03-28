const mysql = require('mysql');
const DATABASE_CONFIG = require('./config');
try {
    const connectionMysql = mysql.createConnection(DATABASE_CONFIG);
    console.log(`connecting to MySQL host:${DATABASE_CONFIG.host} successful`);
    module.exports = connectionMysql;
} catch(error) {
    console.log(`connecting to MYSQL host:${DATABASE_CONFIG.host} fail`);
    console.error();
}
