const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const createCategoriesAssociatedPicture = (
    picture_id,
    categories
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
            console.log('createCategoriesAssociatedPicture');
        });
    });
};

module.exports = createCategoriesAssociatedPicture;