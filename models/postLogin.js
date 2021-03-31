const dbMysql = require("../dbconnection");
const mysql = require("mysql");

const postLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    const SQL = `SELECT * FROM tbl_users 
                     where username = ${mysql.escape(username)}
                     and password = ${mysql.escape(password)}`;
    dbMysql.query(SQL, (error, result) => {
      if (error) return reject(error);
      resolve(result);
      console.log(result);
    });
  });
};

/* const postLogin = (username, password, callback) => {
  return dbMysql.query("SELECT * FROM tbl_users where username = ? and password = ?",[username,password],callback);
} */

module.exports = postLogin;
