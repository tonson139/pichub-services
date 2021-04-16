const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const readCategoriesPictureAssociatedByPictureIds = (picture_ids) => {
    // picture_ids can be string, number, object [2,3,4]
    return new Promise((resolve, reject) => {
        let SQLwhereclause = null;
        if(typeof(picture_ids) === 'object'){
            let listIds = '';
            picture_ids.forEach((id, index) => {
                if(index === picture_ids.length - 1 ) 
                listIds += mysql.escape(parseInt(id))
                else 
                listIds += mysql.escape(parseInt(id)) + ',';
            });
            SQLwhereclause = `WHERE cpa.picture_id IN (${listIds})`;
        } else {
            SQLwhereclause = `WHERE picture_id = ${mysql.escape(parseInt(picture_ids))}`;
        }
        const SQL = `SELECT 
                        cpa.picture_id,
                        cpa.category_id,
                        c.categorytitle
                    FROM tbl_categoriespicturesassociated AS cpa
                    INNER JOIN tbl_categories AS c
                    ON c.id = cpa.category_id
                    ${SQLwhereclause} 
                    ORDER BY cpa.picture_id ASC;`;

        dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result);
        });
    });
};

module.exports = readCategoriesPictureAssociatedByPictureIds;