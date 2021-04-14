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

            // set default profile and background picture src 
            const defaultProfile = path.join(__dirname,'..','/public/defaultProfilePicture/profile_default.png');
            const defaultBackgoround = path.join(__dirname,'..','/public/defaultProfilePicture/background_default.png');
            // check if user not send profile or background 
            const noProfile = 'profilepicture' in req.body;
            const noBackground = 'backgroundpicture' in req.body;

            // save Profile Picture and Background Picture 
            if(noProfile && noBackground){
                fs.copyFileSync(defaultProfile,path.join(userDirectory,'profile.png'));
                fs.copyFileSync(defaultBackgoround,path.join(userDirectory,'background.png'));
            } 
            else if(noProfile){
                fs.copyFileSync(defaultProfile,path.join(userDirectory,'profile.png'));
                resultSaveProBackPic = await saveFiles(req.files, ['backgroundpicture'],['background'], userDirectory);
            }
            else if(noBackground){
                fs.copyFileSync(defaultBackgoround,path.join(userDirectory,'background.png'));
                resultSaveProBackPic = await saveFiles(req.files, ['profilepicture'],['profile'], userDirectory);
            }
            else {
                resultSaveProBackPic = await saveFiles(req.files, ['profilepicture', 'backgroundpicture'],['profile', 'background'], userDirectory);
            }

            // response 
            res.status(201).json({
                results: true,
                isValidUsername: true,
                isValidEmail: true,
                isValidProfilename: true,
                noProfile,
                noBackground,
                user_id,
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = register;