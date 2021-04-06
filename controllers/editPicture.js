/**
 * @description     - user edit a posted picture. This function save new picture to storage
 * @routes          - [PUT] /post
 */

const path = require('path');
const fs = require('fs');
const { createCategoriesAssociatedPicture,
        deleteCategoriesPicturesAssociated,
        updatePicture,
        readPictureByPictureIds
    } = require('../models');

const editPicture = async (req, res, next) => {
    try {
        console.info("INFO: editPicure");
        const {
            user_id,
            picture_id,
            picturetitle,
            price,
            description,
            stocklimits,
            categories,
            originalfilename,
        } = req.body;
        file = req.files[0];

        // check if picture exist and user is the owner of picture 
        let picture = await readPictureByPictureIds(picture_id);
        picture = picture[0];
        let isValidUpdate = false;
        if(picture && (parseInt(user_id) === picture.user_id)) 
            isValidUpdate = true;


        if(isValidUpdate) {
            // delete old file 
            const destOldfile = path.join(__dirname,'..',`/storage/${picture.user_id}/img/${picture.uuid}.${picture.filetype}`);
            fs.unlinkSync(destOldfile);

            // write new file 
            filetype = file.mimetype.split("/")[1];
            const destNewfile = path.join(__dirname,'..',`/storage/${picture.user_id}/img/${picture.uuid}.${filetype}`)
            fs.writeFile(destNewfile, file.buffer, err =>{ 
                if(err) throw err;
                console.info(`INFO: update picture in ${destNewfile}`)
            });

            // update tbl_pictures then delete and insert new categories of a picture
            const updateResult = await updatePicture(picture.id, originalfilename, filetype, picturetitle, price, description, stocklimits);
            const deleteResult = await deleteCategoriesPicturesAssociated(picture.id);
            if(deleteResult){
                const insertResult = await createCategoriesAssociatedPicture(picture.id, categories.split(','));
                res.status(202).json({
                    result: true,
                    changePictureInfo: updateResult.message,
                    affectedPictureId: picture_id,
                    numberofOldCategoriesRemove: deleteResult.affectedRows,
                    numberofNewCategoriesInsert: insertResult.affectedRows
                }); 
            }
        } else {
            res.status(400).json({
                result: false,
                message: 'user_id not match id of picture owner, or, picture_id not exist',
            });
        }
    } catch (error) {
        next(error);
    }

}

module.exports = editPicture;