const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const deleteCategoriesPictureAssociated = (picture_id) => {
    return new Promise((resolve, reject) => {
        const SQL = `DELETE FROM tbl_categoriespicturesassociated
                    WHERE picture_id = ${mysql.escape(parseInt(picture_id))}`;
        dbMysql.query(SQL, (error, result, field) => {
            if (error) return reject(error);
            resolve(result);
        });
    })
};

module.exports = deleteCategoriesPictureAssociated;