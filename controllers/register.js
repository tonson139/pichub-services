/**
 * @description     - Register 
 * @routes          - [POST] /user 
 */

const fs = require('fs');
const path = require('path');

const { createUser } = require('../models');
const { saveFiles } =require('../helpers');

const register = async (req, res, next) => {
    try {
        console.info('INFO: register');
        const {
            username,
            email,
            password,
            profilename,
            bio
        } = req.body;
        
        const insertResult = await createUser(username, email, password, profilename, bio);
        if(insertResult){

            // create user directory in /storage/{user_id}/user
            user_id = insertResult.insertId;
            const userDirectory = path.join(__dirname,'..',`/storage/${user_id}/user`);
            fs.mkdirSync(userDirectory,{ recursive: true });

            // save Profile Picture and Background Picture 
            const resultSaveProBackPic = await saveFiles(req.files, ['profilepicture', 'backgroundpicture'],['profile', 'background'], userDirectory);

            // response 
            res.status(201).json({
                results: (resultSaveProBackPic.length === 2),
                isValidUsername: true,
                isValidEmail: true,
                isValidProfilename: true,
                user_id,
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = register;