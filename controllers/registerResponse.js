const registerResponse = (req, res, next) => {

        res.status(201).json({
            results: true,
            isValidUsername: true,
            isValidEmail: true,
            isValidProfilename: true,
            user_id: req.body.user_id
        });
    next();
}

module.exports = registerResponse;