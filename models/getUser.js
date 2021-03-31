const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const User = (user_id) => {
    return new Promise((resolve, reject) => {
      const SQL = `SELECT * FROM tbl_users 
                       where user_id = ${mysql.escape(user_id)}`;
      dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result);
        console.log(result);
      });
    });
  };

module.exports = User;