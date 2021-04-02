const readUser = require('../models/readUser');
const path = require('path');
const fs = require('fs/promises');

'use strict';
const { networkInterfaces } = require('os');

const getNetworkAddress = () => {
    const nets = networkInterfaces();
    let results = null; // Or just '{}', an empty object
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4'&& net.internal) {
                results = net.address;
            }
        }
    }
    return results;
}


const getUserProfile = async (req, res, next) => {
    const {
        user_id,
    } = req.params
    
    const user = await readUser(user_id);
    const serverAddress = getNetworkAddress();
    if (user) {
        // get file with correct file extension (.jpg, .png, etc.) 
        userPicture = { profile: null, background: null};
        const files = await fs.readdir(path.join(__dirname,'..',`/storage/${user_id}/user`));
        for await (const file of files){
            if(file.split('.')[0] === 'profile')
                userPicture.profile = file;
            if(file.split('.')[0] === 'background')
                userPicture.background = file;
        }
        res.status(200).json({
            results: true,
            username: user.username,
            password: user.password,
            email: user.email,
            profilename: user.profilename,
            bio: user.about,
            profilepic: `http://${serverAddress}:${port}/${user_id}/user/${userPicture.profile}`,
            backgroundpic: `http://${serverAddress}:${port}/${user_id}/user/${userPicture.background}`
        });
    } else {
        res.status(400).json({
            results: false
        })
    };
    next();
}

module.exports = getUserProfile;