/**
 * @description     - user edit a posted picture. This function save new picture to storage
 * @routes          - [PUT] /post
 */

const multer = require("multer");
const fs = require('fs');
const path = require('path');
const readPictureByPictureIds = require('../models/readPictureByPictureIds');

// delete old picture file and save new picture
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        try{
            const picture = await readPictureByPictureIds(req.body.picture_id);
            console.log(picture);
            let isValidUpdate = false;
            console.log(picture[0].user_id);
            if((picture.length === 1) && (parseInt(req.body.user_id) === picture[0].user_id)) 
                isValidUpdate = true;
            console.log(isValidUpdate);
            if(isValidUpdate) {
                req.body.picture = picture[0];
                req.body.originalfilename = file.originalname;
                fs.unlinkSync(path.join(__dirname,'..',`/storage/${req.body.user_id}/img/${req.body.picture.uuid}.${req.body.picture.filetype}`));
                const dest = path.join(__dirname,'..',`/storage/${req.body.user_id}/img`);
                cb(null, dest);
            }
        } catch (error) {
            console.error(error);
        }
    },
    filename: async (req, file, cb) => {
        if(isValidUpdate) {
            x = file.mimetype.split("/");
            filetype = x[x.length - 1];
            cb(null, `${req.body.picture.uuid}.${filetype}`);
        }
    },
});
const upload = multer({ storage: storage });


module.exports = upload.single('uploaded_pic');