const { readUser } = require('../models');
const { getNetworkAddress,
        getFilenameUserProfile } = require('../helpers');

const getUserProfile = async (req, res, next) => {
    const {
        user_id,
    } = req.params
    
    const user = await readUser(user_id);
    const serverAddress = getNetworkAddress();
    if (user) {
        const userPicture = await getFilenameUserProfile(user_id);
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