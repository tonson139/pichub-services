const multer = require("multer");
const fs = require('fs');
const path = require('path');

const createUser = require('../models/createUser');

const storage = multer.diskStorage({
    destination: async (req, file, cb)=>{
        // forntend need to always send textfields before 'profilepicture' then 'backgroundpciture' last.
        if(file.fieldname==="profilepicture"){
            const {
                username,
                email,
                password,
                profilename,
                bio
            } = req.body;
            const result = await createUser(
                username,
                email,
                password,
                profilename,
                bio,
            );
            req.body.user_id = result.insertId;
            const dest = path.join(__dirname,'..',`/storage/${req.body.user_id}/user`);
            req.body.dest = dest;

            fs.mkdirSync(dest,{ recursive: true });
            console.log(`new directory for new user ${dest}`);
            cb(null, dest);
        }
        else if(file.fieldname==="backgroundpicture"){
            cb(null, req.body.dest);
        }
    },
    filename:(req, file, cb)=>{
        if(file.fieldname==="profilepicture"){
            cb(null, `profile${path.extname(file.originalname)}`);
        }
        else if(file.fieldname==="backgroundpicture"){
            cb(null, `background${path.extname(file.originalname)}`);
        }
    }
});
const upload = multer({ storage: storage });


module.exports = upload.fields([{ name: 'profilepicture'}, { name: 'backgroundpicture'}]);