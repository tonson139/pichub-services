const fs =require('fs/promises');
const path = require('path');

const getFilenameUserProfile = async (user_ids) => {
    if(typeof(user_ids) !== 'object')
        user_ids = [user_ids];
    let userPictureFile = {};
    for(let i =0; i < user_ids.length; i++){
        let tmp = {profile: null, background: null};
        // get file with correct file extension (.jpg, .png, etc.) 
        const files = await fs.readdir(path.join(__dirname,'..',`/storage/${user_ids[i]}/user`));
        for (const file of files){
            if(file.split('.')[0] === 'profile')
                tmp.profile = file;
            if(file.split('.')[0] === 'background')
                tmp.background = file;
        };
        userPictureFile[user_ids[i]] = tmp;
    };
    return userPictureFile;    
}

module.exports = getFilenameUserProfile;