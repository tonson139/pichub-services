const dbMysql = require('../dbconnection');
const mysql = require('mysql');

const getCategoriesUserFollow = async (user_id) => {
    return new Promise( (resolve, reject) => {
        SQL = `SELECT DISTINCT *
        FROM
        (
            SELECT 
                cuf.user_id     AS user_id,
                cpa.picture_id  AS picture_id,
                pic.user_id     AS owner_id,
                u.profilename   AS profilename,
                pic.picturetitle,
                CONCAT(pic.uuid, '.', pic.filetype) AS filename,
                pic.description,
                pic.price,
                pic.stocklimits 
            FROM tbl_categoriesuserfollow AS cuf
            INNER JOIN tbl_categoriespicturesassociated AS cpa
            ON cuf.category_id = cpa.category_id
            INNER JOIN tbl_pictures AS pic
            ON cpa.picture_id = pic.id
            INNER JOIN tbl_users AS u
            ON u.id = pic.user_id
        ) AS sub 
        WHERE sub.user_id = ${mysql.escape(parseInt(user_id))}
        ORDER BY sub.picture_id
        LIMIT 20;`;
        dbMysql.query(SQL, (error, resutl) => {
            if(error) reject(error);
            resolve(resutl);
        });
    });
};

module.exports =  getCategoriesUserFollow;