const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const updateUser = (id, username, password, email, profilename, about) => {
    return new Promise((resolve, reject) => {
        const SQL = `UPDATE tbl_users 
                    SET 
                    username = ${mysql.escape(username)},
                    password = ${mysql.escape(password)},
                    email = ${mysql.escape(email)},
                    profilename = ${mysql.escape(profilename)},
                    about=${mysql.escape(about)}
                    WHERE id = ${mysql.escape(id)}`;
        dbMysql.query(SQL, (error, result, field) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
};

module.exports = updateUser;