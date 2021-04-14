/**
 * @description     - get user all post in storage   
 * @routes          - [GET] /post 
 */

const { readPictureByUserId } = require('../models');
const formatPictureResponse = require('./formattedPicturesResponse');

const getUserPost = async (req, res, next)=> {
    try {
        console.info("INFO: getUserPost");
        const user_id = req.params.user_id;

        // get all picture info of a user
        const picturesOfUser = await readPictureByUserId(user_id);

        if(picturesOfUser.length !== 0){
            // format picture to response 
            const responseData = await formatPictureResponse(picturesOfUser);
            res.status(200).send(responseData);
        } else {
            // response with empty if user have no post.
            res.status(400).send({
                result: false,
                message: `user_id = ${user_id} not have any post OR user_id not found`
            });
        }
    } catch(error) {
        next(error);
    }
}
module.exports = getUserPost;