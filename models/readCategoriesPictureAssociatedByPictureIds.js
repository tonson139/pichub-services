const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const readCategoriesPictureAssociatedByPictureIds = (picture_ids) => {
    // picture_ids can be string, number, object [2,3,4]
    return new Promise((resolve, reject) => {
        let SQL = null;
        if(typeof(picture_ids) === 'object'){
            let listIds = '';
            picture_ids.forEach((id, index) => {
                if(index === picture_ids.length - 1 ) 
                    listIds += mysql.escape(parseInt(id))
                else 
                    listIds += mysql.escape(parseInt(id)) + ',';
            });
            SQL = `SELECT * FROM tbl_categoriespicturesassociated WHERE picture_id IN (${listIds}) ORDER BY picture_id ASC`;
        } else {
            SQL = `SELECT * FROM tbl_categoriespicturesassociated WHERE picture_id = ${mysql.escape(parseInt(picture_ids))}`;
        }
        dbMysql.query(SQL, (error, result) => {
        if (error) return reject(error);
        resolve(result);
        });
    });
};

module.exports = readCategoriesPictureAssociatedByPictureIds;