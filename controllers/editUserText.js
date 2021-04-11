/**
 * @description     - Edit username, password, email, profilename, bio
 * @routes          - [PUT] /user 
 */

const { updateUserText } = require("../models");

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

        const Updateresult = await updateUserText(user_id, username, password, email, profilename, bio);

        if (Updateresult) {
            res.status(202).json({
                results: true,
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