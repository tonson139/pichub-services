const getPictureByCategoriesUserFollow = require('../models/getPicutresByCategoriesUserFollow');
const readCategoriesPictureAssociatedByPictureIds = require('../models/readCategoriesPictureAssociatedByPictureIds');
const getNetworkAddress = require('./getNetworkAddress');
const getFilenameUserProfile = require('./getFilenameUserProfile');

const getTimeline = async (req, res, next) => { 
    const {user_id} = req.params;

    // get all picture in the categories user follow 
    const picture = await getPictureByCategoriesUserFollow(user_id);
    picture_ids = [];
    picture.forEach( e => {
        picture_ids.push(e.picture_id);
    });

    // get categories for each picture 
    const categoires = await readCategoriesPictureAssociatedByPictureIds(picture_ids);
    picture_categories = {};
    categoires.forEach(e => {
        if(!(e.picture_id in picture_categories)){
            picture_categories[e.picture_id] = [e.category_id.toString()];
        } else {
            picture_categories[e.picture_id].push(e.category_id.toString());
        }
    });
    
    // get fimlename of profile and background of user 
    user_ids = [];
    picture.forEach( e => {
        user_ids.push(e.owner_id);
    });
    user_ids = [...new Set(user_ids)];
    const userProfilePic = await getFilenameUserProfile(user_ids);

    // prepare response data
    responseData = [];
    picture.forEach( e => { 
        responseData.push({
            img_id: e.picture_id,
            img_title: e.picturetitle,
            img_ownerid: e.owner_id,
            img_owner: e.profilename,
            img_src: `http://${getNetworkAddress()}:${port}/${e.owner_id}/img/${e.filename}`,
            profile_pic: `http://${getNetworkAddress()}:${port}/${e.owner_id}/user/${userProfilePic[e.owner_id].profile}`,
            img_bio: e.descriptoin,
            img_cate: picture_categories[e.picture_id],
            img_price: e.price,
            img_stock: e.stocklimits,
        });
    });

    res.status(200).send(responseData);
}

module.exports = getTimeline;