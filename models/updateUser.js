const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const updateUser = (id, email, about) => {
    return new Promise((resolve, reject) => {
        const SQL = `UPDATE tbl_users 
                    SET email = ${mysql.escape(email)},
                    about=${mysql.escape(about)}
                    WHERE id = ${mysql.escape(id)}`;
        dbMysql.query(SQL, (error, result, field) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
};

module.exports = updateUser;