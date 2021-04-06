/**
 * @description     - get profile of user from user_id 
 * @routes          - [GET] /user/:user_id 
 */

const { readUser } = require('../models');
const { getNetworkAddress,
        getFilenameUserProfile } = require('../helpers');

const getUserProfile = async (req, res, next) => {
    try{
        console.info('INFO: getUserProfile');    
        const {
            user_id,
        } = req.params
        
        //get info of user 
        const user = await readUser(user_id);
        const serverAddress = getNetworkAddress();
        if (user) {
            // get name of pic files with correct file extention 
            const userPicture = await getFilenameUserProfile(user_id);

            // response 
            res.status(200).json({
                results: true,
                username: user.username,
                password: user.password,
                email: user.email,
                profilename: user.profilename,
                bio: user.about,
                profilepic: `http://${serverAddress}:${process.env.PORT}/${user_id}/user/${userPicture[user_id].profile}`,
                backgroundpic: `http://${serverAddress}:${process.env.PORT}/${user_id}/user/${userPicture[user_id].background}`
            });
        } else {
            // response if user not found 
            res.status(400).json({
                results: false,
                message: `user_id = ${user_id} not found`

            })
        };
    } catch (error) {
        next(error);
    }
}

module.exports = getUserProfile;