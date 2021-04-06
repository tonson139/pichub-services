const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const validateLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        const SQL = `SELECT * FROM tbl_users WHERE (username = ${mysql.escape(username)} AND password = ${mysql.escape(password)})`
        // console.log(SQL);
        dbMysql.query(SQL, (error, result) => {
            // console.log(result);
            if(result.length !== 1)
                return reject(false);
            else    
                return resolve(result[0].id);
        }); 
    });
}

module.exports = validateLogin;