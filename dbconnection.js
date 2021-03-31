const mysql = require('mysql');
const DATABASE_CONFIG = require('./config');
try {
    const connectionMysql = mysql.createConnection(DATABASE_CONFIG);
    connectionMysql.connect(function(err) {
        if (err) {
            console.error(`connecting to MYSQL host:${DATABASE_CONFIG.host} fail \n${err.stack}`);
            return;
        }
            console.log(`connecting to MySQL host:${DATABASE_CONFIG.host} successful`);
            console.log('connected as id ' + connectionMysql.threadId);
    });
    module.exports = connectionMysql;
} catch(error) {
    console.error();
}
