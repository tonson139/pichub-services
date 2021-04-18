/**
 * @description     - user create a "post" with "picture" and "picture detail". This function save "picture" to storage
 * @routes          - [POST] /post
 */

const multer = require("multer");
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const { createPicture }= require('../models');
const { createCategoriesAssociatedPicture } = require('../models');
const { getFormattedDate } = require('../helpers');

// save picture to storage dirtory 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // set path to /storage/{user_id}/img/{uuid}.filetype
        // PROBLEM: POST filed order file need to be the last field.
        const dest = path.join(__dirname,'..',`/storage/${req.body.user_id}/img`);
        fs.access(dest, (err) => {
            if (err) {
                console.info(`INFO: first post of a user, create new directory ${dest}`);
                fs.mkdirSync(dest,{ recursive: true });
            } 
            cb(null, dest);
            
        });
    },
    filename: async (req, file, cb) => {
        x = file.mimetype.split("/");
        filetype = x[x.length - 1];
        uuidPicture = uuid.v4();
        date = getFormattedDate();
        try{
            req.body.picture = await createPicture(
                req.body.user_id,
                file.originalname,
                filetype,
                uuidPicture,
                req.body.picturetitle,
                date,
                req.body.price,
                req.body.desciption,
                req.body.stocklimits
                );
            req.body.result = await createCategoriesAssociatedPicture(req.body.picture.insertId, req.body.categories.split(',').slice(0,-1));
            if(req.body.picture) { }
            if(req.body.result) { }
        } catch (error) {
            console.error(error);
        }
        cb(null, uuidPicture + "." + filetype);
    },
});
const upload = multer({ storage: storage });


module.exports = upload.single('uploaded_pic');