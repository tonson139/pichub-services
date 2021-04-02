const multer = require("multer");
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: async (req, file, cb)=>{
        if(file.fieldname==="profilepicture"){
            const dest = path.join(__dirname,'..',`/storage/${req.body.user_id}/user`);
            req.body.dest = dest;
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