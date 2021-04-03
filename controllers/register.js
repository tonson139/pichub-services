const fs = require('fs');
const path = require('path');

const createUser = require('../models/createUser');

const register = async (req, res, next) => {
    const {
        username,
        email,
        password,
        profilename,
        bio
    } = req.body;
    const insertResult = await createUser(username, email, password, profilename, bio);
    if(insertResult){
        user_id = insertResult.insertId;
        const userDirectory = path.join(__dirname,'..',`/storage/${user_id}/user`);
        fs.mkdirSync(userDirectory,{ recursive: true });
    
        req.files.forEach( file => {
            if(file.fieldname === 'profilepicture')
                dest = path.join(userDirectory,`/profile${path.extname(file.originalname)}`)
            if(file.fieldname === 'backgroundpicture')
                dest = path.join(userDirectory,`/background${path.extname(file.originalname)}`)   
            fs.writeFile(dest, file.buffer, (err)=>{ 
                if(err) throw err;
                console.log(`${file.fieldname} saved to ${dest}`)});
        });
        
        res.status(201).json({
            results: true,
            isValidUsername: true,
            isValidEmail: true,
            isValidProfilename: true,
            user_id,
        });
    }
}

module.exports = register;