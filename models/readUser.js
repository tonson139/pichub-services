const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const readUser = (user_id) => {
    return new Promise((resolve, reject) => {
      const SQL = `SELECT * FROM tbl_users 
                      where id = ${mysql.escape(user_id)}`;
      dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result[0]);
      });
    });
  };

module.exports = readUser;