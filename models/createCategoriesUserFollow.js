const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const createCategoriesUserFollow = (
    user_id,
    category_id
) => {
    return new Promise((resolve, reject) => {
        let SQL = 'INSERT INTO tbl_categoriesuserfollow (user_id, category_id) VALUES ';
        category_id.forEach((element, index) => {
            if(index === category_id.length-1)
                SQL += `(${parseInt(user_id)}, ${parseInt(element)})`;
            else 
                SQL += `(${parseInt(user_id)}, ${parseInt(element)}), `;
        });
        dbMysql.query(SQL, (error, result, field) => {
            if (error) {
                console.error(error);
                return reject(error);
            }
            resolve(result);
            console.log('createCategoriesUserFollow');
        });
    });
};

module.exports = createCategoriesUserFollow;