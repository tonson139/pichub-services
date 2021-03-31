const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const createUser = (
    username,
    email,
    password,
    profilename,
    about,
) => {
    return new Promise((resolve, reject) => {
        const SQL = `INSERT INTO tbl_users (username, email, password, profilename, about) 
                    VALUES (
                        ${mysql.escape(username)},
                        ${mysql.escape(email)},
                        ${mysql.escape(password)},
                        ${mysql.escape(profilename)},
                        ${mysql.escape(about)}
                    )`;
        dbMysql.query(SQL, (error, result, field) => {
        if (error) return reject(error);
        resolve(result);
        });
    });
};
module.exports = createUser;