/**
 * @description     - Edit user profile: email and bio 
 * @routes          - [PUT] /user 
 */

const fs = require('fs/promises'); // const fs = require("fs").promises; node version 12.x
const path = require('path');
const { updateUser } = require("../models");
const { saveFiles } =require('../helpers');

const editUser = async (req, res, next) => {
    try{
        console.info('INFO: editUser');
        const { user_id, 
                email, 
                bio 
        } = req.body;

        const Updateresult = await updateUser(user_id, email, bio);

        if (Updateresult) {
            // delete user profile and background files in dir /storage/{user_id}/user
            const userDirectory = path.join(__dirname,'..',`/storage/${user_id}/user`);
            const oldfilenames = await fs.readdir(userDirectory);
            for(const filename of oldfilenames)
                fs.unlink(path.join(userDirectory, filename));
            const saveResult = await saveFiles(req.files, ['profilepicture', 'backgroundpicture'],['profile', 'background'], userDirectory);
            res.status(202).json({
                results: (saveResult.length === 2),
                isValidUsername: true,
                isValidEmail: true,
                isValidProfilename: true,
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