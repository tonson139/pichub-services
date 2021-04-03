const multer = require("multer");
const fs = require('fs');
const path = require('path');
const readPictureByPictureIds = require('../models/readPictureByPictureIds');

// delete old picture file and save new picture
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        picture = await readPictureByPictureIds(req.body.picture_id);
        req.body.picture = picture[0];
        req.body.originalfilename = file.originalname;
        fs.unlinkSync(path.join(__dirname,'..',`/storage/${req.body.user_id}/img/${req.body.picture.uuid}.${req.body.picture.filetype}`));
        const dest = path.join(__dirname,'..',`/storage/${req.body.user_id}/img`);
        cb(null, dest);
        //cb(null, path.join(__dirname,'..','storage/test')); // for debug
    },
    filename: async (req, file, cb) => {
        x = file.mimetype.split("/");
        filetype = x[x.length - 1];
        cb(null, `${req.body.picture.uuid}.${filetype}`);
        // cb(null, `${require('uuid').v4()}.${filetype}`); // for debug
    },
});
const upload = multer({ storage: storage });


module.exports = upload.single('uploaded_pic');