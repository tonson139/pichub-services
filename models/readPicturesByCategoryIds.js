const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const readPicturesByCategoryIds = (category_ids) => {
    // category_ids can be string, number, array [2,3,4]
    return new Promise((resolve, reject) => {
        
        let whereClause = false;
        if(typeof(category_ids) === 'object'){
            let listIds = '';
            category_ids.forEach((id, index) => {
                if(index === category_ids.length - 1 ) 
                listIds += mysql.escape(parseInt(id))
                else 
                listIds += mysql.escape(parseInt(id)) + ',';
            });
            whereClause = listIds;
        } else {
            whereClause = mysql.escape(parseInt(category_ids));
        }
        let SQL = `SELECT 
                        DISTINCT
                        cpa.picture_id  AS picture_id,
                        p.user_id       AS owner_id,
                        u.profilename,
                        p.picturetitle,
                        CONCAT(p.uuid, '.', p.filetype) AS filename,
                        p.description,
                        p.price,
                        p.stocklimits
                    FROM tbl_categoriespicturesassociated cpa
                    INNER JOIN tbl_pictures p
                    ON p.id = cpa.picture_id
                    INNER JOIN tbl_users u
                    ON u.id = p.user_id
                    WHERE cpa.category_id IN (${whereClause})`;
        dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result);
        });
    });
};

module.exports = readPicturesByCategoryIds;