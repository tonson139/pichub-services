const createUser = require('../models/createUser');

const register = async (req, res, next) => {
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

    if (result) {
        res.status(201).json({
            results: true,
            isValidUsername: true,
            isValidEmail: true,
            isValidProfilename: true,
            user_id: result.insertId
        });
    } else {
        res.status(400).json({
            results: false,
            isValidUsername: false,
            isValidEmail: false,
            isValidProfilename: false
        });
    }
    next();
}

module.exports = register;