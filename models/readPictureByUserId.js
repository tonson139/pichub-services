const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const readPictureByUserId = (user_id) => {
    return new Promise((resolve, reject) => {
        const SQL = `SELECT 
                        pic.id AS picture_id,
                        pic.user_id     AS owner_id,
                        u.profilename   AS profilename,
                        pic.picturetitle,
                        CONCAT(pic.uuid, '.', pic.filetype) AS filename,
                        pic.description,
                        pic.price,
                        pic.stocklimits 
                    FROM tbl_pictures AS pic
                    INNER JOIN tbl_users AS u
                    ON pic.user_id = u.id
                    WHERE user_id = ${mysql.escape(parseInt(user_id))}`;
        dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result);
        });
    });
};

module.exports = readPictureByUserId;