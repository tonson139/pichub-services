const dbMysql = require('../dbconnection');
const mysql = require("mysql");

const createPicture = (
    user_id,
    originalfilename,
    filetype,
    uuid,
    picturetitle,
    date,
    price,
    desciption,
    stocklimits
) => {
    return new Promise((resolve, reject) => {
        const SQL = `INSERT INTO tbl_pictures (user_id,
                                            originalfilename,
                                            filetype,
                                            uuid,
                                            picturetitle,
                                            posteddate,
                                            price,
                                            description,
                                            stocklimits,
                                            remainingstocks,
                                            numberofsales) 
                    VALUES (
                        ${mysql.escape(parseInt(user_id))},
                        ${mysql.escape(originalfilename)},
                        ${mysql.escape(filetype)},
                        ${mysql.escape(uuid)},
                        ${mysql.escape(picturetitle)},
                        ${mysql.escape(date)},
                        ${mysql.escape(parseInt(price))},
                        ${mysql.escape(desciption)},
                        ${mysql.escape(parseInt(stocklimits))},
                        ${mysql.escape(parseInt(stocklimits))},
                        0
                    )`;
        dbMysql.query(SQL, (error, result, field) => {
        if (error) return reject(error);
        resolve(result);
        console.log('createPicture');
        });
    });
};

module.exports = createPicture;