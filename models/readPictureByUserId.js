const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const readPictureByUserId = (user_id) => {
    return new Promise((resolve, reject) => {
        const SQL = `SELECT * FROM tbl_pictures 
                    where user_id = ${mysql.escape(parseInt(user_id))}`;
        dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result);
        });
    });
};

module.exports = readPictureByUserId;