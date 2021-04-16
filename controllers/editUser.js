/**
 * @description     - Edit user profile: email and bio 
 * @routes          - [PUT] /user 
 */

const fs = require('fs/promises'); // const fs = require("fs").promises; node version 12.x
const path = require('path');
const { updateUser } = require("../models");
const { saveFiles } = require('../helpers');

const editUser = async (req, res, next) => {
    try{
        console.info('INFO: editUser');
        const { user_id,
                username,
                password,
                email,
                profilename,
                bio 
        } = req.body;

        const Updateresult = await updateUser(user_id,username, password, email, profilename, bio);

        if (Updateresult) {
            // get old filename of user pic 
            const userDirectory = path.join(__dirname,'..',`/storage/${user_id}/user`);
            const oldfilenames = await fs.readdir(userDirectory);

            // if user send text in fields (profilepicture or backgroundpicture) = not edit 
            const isEditProfile = !('profilepicture' in req.body);
            const isEditBackground = !('backgroundpicture' in req.body);
            
            // delete and save new profile pic
            if(isEditProfile){
                for(const filename of oldfilenames){
                    if(filename.split('.')[0] === 'profile'){
                        fs.unlink(path.join(userDirectory, filename));
                        resultSaveProBackPic = await saveFiles(req.files, ['profilepicture'],['profile'], userDirectory);
                    }
                }
            }

            // delete and save new background pic
            if(isEditBackground){
                for(const filename of oldfilenames){
                    if(filename.split('.')[0] === 'background'){
                        fs.unlink(path.join(userDirectory, filename));
                        resultSaveProBackPic = await saveFiles(req.files, ['backgroundpicture'],['background'], userDirectory);
                    }
                }
            }
            
            res.status(202).json({
                results: true,
                isValidUsername: true,
                isValidEmail: true,
                isValidProfilename: true,
                isEditProfile,
                isEditBackground,
                user_id
            });
        } else {
            res.status(400).json({
                results: false,
                message: `Update user_id = ${user_id} failed`
            })
        };
    } catch (error) {
        next(error);
    }
}

module.exports = editUser;