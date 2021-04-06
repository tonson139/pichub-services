/**
 * @description     - get picture for search by category   
 * @routes          - [GET] /timeline 
 */

const { readPicturesByCategoryIds, } = require('../models');
const formatPictureResponse = require('./formattedPicturesResponse');

const getPictureByCategory = async (req, res, next) => {
    try {
        console.info("INFO: getPictureByCategory");
        const category_id = req.params.category_id
        // get all pictures in category_id 
        const picture = await readPicturesByCategoryIds(category_id); 
        const responseData = await formatPictureResponse(picture);

        res.status(200).send(responseData);
    } catch(error) {
        next(error);
    }
}

module.exports = getPictureByCategory;