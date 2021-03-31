const User = require('../models/getUser');

const userProfile = async (req, res, next) => {
    const {
        user_id,
    } = req.params
    const result = await User(user_id);
    if (result) {
        res.status(201).json({
            results: true,
            isValidUsername: true,
            isValidEmail: true,
            isValidProfilename: true,
            user_id: user_id
        });
    } else {
        res.status(400).json({
            results: false
        })
    };
    next();
}

module.exports = userProfile;