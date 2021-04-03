const createCategoriesAssociatedPicture = require('../models/createCategoriesAssociatedPicture');
const deleteCategoriesPictureAssociated = require('../models/deleteCategoriesPicturesAssociated');
const updatePicture = require('../models/updatePicture');

const editPicture = async (req, res, next) => {
    const {
        user_id,
        picture_id,
        picturetitle,
        price,
        description,
        stocklimits,
        categories,
        picture,
        originalfilename,
    } = req.body;
    if(parseInt(user_id) !== picture.user_id){
        res.status(400).json({
            result: false,
            message: 'user_id not match id of picture owner',
        });
    }
    else {
        const updateResult = await updatePicture(picture_id, originalfilename, filetype, picturetitle, price, description, stocklimits);
        const deleteResult = await deleteCategoriesPictureAssociated(picture_id);
        if(deleteResult){
            const insertResult = await createCategoriesAssociatedPicture(picture_id, categories.split(','));
            res.status(202).json({
                result: true,
                changePictureInfo: updateResult.message,
                affectedPictureId: picture_id,
                numberofOldCategoriesRemove: deleteResult.affectedRows,
                numberofNewCategoriesInsert: insertResult.affectedRows
            }); 
        }
    }
}

module.exports = editPicture;