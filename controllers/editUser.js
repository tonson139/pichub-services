const { updateUser } = require("../models");

const editUser = async (req, res, next) => {
    user_id = req.body.user_id;
    email = req.body.email;
    bio = req.body.bio;
    const result = await updateUser(user_id,email,bio);
    if (result) {
        res.status(202).json({
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