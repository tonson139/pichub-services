const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const updatePicture = (id, originalfilename, filetype, picturetitle, price, description, stocklimits) => {
    return new Promise((resolve, reject) => {
        const SQL = `UPDATE tbl_pictures 
                    SET 
                    originalfilename = ${mysql.escape(originalfilename)},
                    filetype = ${mysql.escape(filetype)},
                    picturetitle = ${mysql.escape(picturetitle)},
                    price = ${mysql.escape(price)},
                    description = ${mysql.escape(description)},
                    stocklimits=${mysql.escape(stocklimits)}
                    WHERE 
                    id = ${mysql.escape(id)}`;
        dbMysql.query(SQL, (error, result, field) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
};

module.exports = updatePicture;