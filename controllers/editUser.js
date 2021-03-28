const updateUser = require("../models/updateUser");

const editUser = async (req, res, next) => {
    const {
        user_id,
        email,
        bio
    } = req.body
    const result = await updateUser(user_id,email,bio);
    if (result) {
        res.status(201).json({
            results: true,
            isValidUsername: true,
            isValidEmail: true,
            isValidProfilename: true
        });
    } else {
        res.status(400).json({
            results: false
        })
    };
    next();
}

module.exports = editUser;