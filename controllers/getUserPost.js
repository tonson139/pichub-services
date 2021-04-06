/**
 * @description     - get user all post in storage   
 * @routes          - [GET] /post 
 */

const { readCategoriesPictureAssociatedByPictureIds, 
        readPictureByUserId,
        readUser 
    } = require('../models');
const { getNetworkAddress } = require('../helpers');

const getUserPost = async (req, res, next)=> {
    try {
        console.info("INFO: getUserPost");
        const user_id = req.params.user_id;

        // get all picture info of a user
        picturesOfUser = await readPictureByUserId(user_id);
        user = await readUser(user_id);
        if(picturesOfUser.length === 0){
            // response with empty if user have no post.
            res.status(400).send({
                result: false,
                message: `user_id = ${user_id} not have any post OR user_id not found`
            });
        } else {
            //create list of picture_id to get categories of each picture
            picture_ids = [];
            picturesOfUser.forEach(e => {
                picture_ids.push(e.id);
            });

            // get categories of each picture 
            categoires = await readCategoriesPictureAssociatedByPictureIds(picture_ids);
            picture_categories = {};
            categoires.forEach(e => {
                if(!(e.picture_id in picture_categories)){
                    picture_categories[e.picture_id] = [e.category_id.toString()];
                } else {
                    picture_categories[e.picture_id].push(e.category_id.toString());
                }
            })

            // format response 
            response = [];
            picturesOfUser.forEach((e) => {
                const post = { 
                    img_onwer: user.profilename,
                    img_id: e.id.toString(),
                    img_title: e.picturetitle,
                    img_bio: e.description,
                    img_price: e.price.toString(),
                    img_stock: e.remainingstocks.toString(),
                    img_cate: picture_categories[e.id],
                    img_src: `http://${getNetworkAddress()}:${port}/${user_id}/img/${e.uuid}.${e.filetype}`
                };
                response.push(post);
            });
            res.status(200).send(response);
        }
    } catch(error) {
        next(error);
    }
}
module.exports = getUserPost;