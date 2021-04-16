/**
 * @description     - This function prepare a response for pictures
 * @param           - RowDataPacket [{ <picture_id>, <owner_id>, <picturetitle>, 
 *                                      <profilename>, <filename>, <description>, <price>, <stocklimits> }]
 * @returns         - Array of object [ { img_id, img_title, img_ownerid, img_owner, img_src,
 *                               profile_pic, img_bio, img_cate, img_price, img_stock }]
 */

const { readCategoriesPictureAssociatedByPictureIds } = require('../models');
const { getNetworkAddress, getFilenameUserProfile } = require('../helpers');

const formatPictureResponse = async (picture) => {
    try {
            console.info("INFO: formatPictureResponse");
            const picture_ids = picture.map( e => e.picture_id );
            // get categories for each picture 
            const categoires = await readCategoriesPictureAssociatedByPictureIds(picture_ids);
            const picture_categories = {};
            categoires.forEach(e => {
                if(!(e.picture_id in picture_categories)){
                    picture_categories[e.picture_id] = [e.categorytitle.toString()];
                } else {
                    picture_categories[e.picture_id].push(e.categorytitle.toString());
                }
            });
    
            // get filename of profile and background of user 
            let user_ids = picture.map( e => e.owner_id );
            user_ids = [...new Set(user_ids)];
            const userProfilePic = await getFilenameUserProfile(user_ids);
    
            // prepare response data
            let responseData = [];
            picture.forEach( e => { 
                responseData.push({
                    img_id: e.picture_id,
                    img_title: e.picturetitle,
                    img_ownerid: e.owner_id,
                    img_owner: e.profilename,
                    img_src: `http://${getNetworkAddress()}:${process.env.PORT}/${e.owner_id}/img/${e.filename}`,
                    profile_pic: `http://${getNetworkAddress()}:${process.env.PORT}/${e.owner_id}/user/${userProfilePic[e.owner_id].profile}`,
                    img_bio: e.description,
                    img_cate: picture_categories[e.picture_id],
                    img_price: e.price,
                    img_stock: e.stocklimits,
                });
            });
            return responseData;
    } catch(error) {
        console.error(error);
    }
}

module.exports = formatPictureResponse;