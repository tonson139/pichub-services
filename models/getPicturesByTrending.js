const dbMysql = require('../dbconnection');
const mysql = require('mysql');

const getPicutresByCategoriesUserFollow = async (user_id) => {
    return new Promise( (resolve, reject) => {
        SQL = `SELECT 
                    u.id     AS user_id,
                    pic.id  AS picture_id,
                    pic.user_id     AS owner_id,
                    u.profilename   AS profilename,
                    pic.picturetitle,
                    CONCAT(pic.uuid, '.', pic.filetype) AS filename,
                    pic.description,
                    pic.price,
                    pic.stocklimits 
                FROM tbl_pictures AS pic
                INNER JOIN tbl_users AS u
                ON u.id = pic.user_id
                ORDER BY pic.id DESC
                LIMIT 20;`;
        dbMysql.query(SQL, (error, resutl) => {
            if(error) reject(error);
            resolve(resutl);
        });
    });
};

module.exports =  getPicutresByCategoriesUserFollow;
