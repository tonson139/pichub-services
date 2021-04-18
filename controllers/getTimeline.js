/**
 * @description     - get post for timeline screen    
 * @routes          - [GET] /timeline 
 */

const { getPicutresByCategoriesUserFollow,
        getPicturesByTrending 
    } = require('../models/');
const formatPictureResponse = require('./formattedPicturesResponse');

const getTimeline = async (req, res, next) => { 
    try {
        console.info('INFO: getTimeline');
        const {user_id} = req.params;

        // get all picture in the categories user follow 
        const pictureBycuf = await getPicutresByCategoriesUserFollow(user_id);
        let resPictureBycuf = await formatPictureResponse(pictureBycuf);

        // add tag 'FOR YOU'
        resPictureBycuf.forEach( e => {
            e['tag'] = 'FOR YOU';
        });

        // get all picture in the trending now 
        const pictureByt = await getPicturesByTrending(user_id);
        let resPictureByt = await formatPictureResponse(pictureByt);

        // add tag 'TRENDING'
        resPictureByt.forEach( e => {
            e['tag'] = 'TRENDING';
        });
        
        const responseData = resPictureBycuf.concat(resPictureByt);
        res.status(200).send(responseData);
    } catch(error) {
        next(error);
    }
}

module.exports = getTimeline;