const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const createCategoriesAssociatedPicture = (
    picture_id,
    categories // array of cate_id [ '2', '3', '4' ]
) => {
    return new Promise((resolve, reject) => {
        let SQL = 'INSERT INTO tbl_categoriespicturesassociated (picture_id, category_id) VALUES ';
        categories.forEach((element, index) => {
            if(index === categories.length-1)
                SQL += `(${parseInt(picture_id)}, ${parseInt(element)})`;
            else 
                SQL += `(${parseInt(picture_id)}, ${parseInt(element)}), `;
        });
        dbMysql.query(SQL, (error, result, field) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

module.exports = createCategoriesAssociatedPicture;