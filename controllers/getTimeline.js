/**
 * @description     - get post for timeline screen    
 * @routes          - [GET] /timeline 
 */

const { getPicutresByCategoriesUserFollow } = require('../models/');
const formatPictureResponse = require('./formattedPicturesResponse');

const getTimeline = async (req, res, next) => { 
    try {
        console.info('INFO: getTimeline');
        const {user_id} = req.params;

        // get all picture in the categories user follow 
        const picture = await getPicutresByCategoriesUserFollow(user_id);
        let responseData = await formatPictureResponse(picture);

        // add tag for you 
        responseData.forEach( e => {
            e['tag'] = 'FOR YOU';
        });
        
        res.status(200).send(responseData);
    } catch(error) {
        next(error);
    }
}

module.exports = getTimeline;