const { sign } = require('jsonwebtoken');
const { validateLogin } = require("../models");
const md5Encode = require("md5");

const generateAccessToken = username => {
    return sign({username}, process.env.TOKEN_SECRET, { expiresIn: process.env.EXPIRED_ACCESS_TOKEN });
}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        console.info(`INFO: username: "${username}" try to login`);
        //encode password
        // const passwordEncode = md5Encode(password);
        const user_id = await validateLogin(username, password);
        if(user_id > 0){
            console.info(`INFO: user_id: ${user_id}, username: ${username} has logged in`);
            const token = generateAccessToken(username);
            res.status(200).send({
                result: true,
                username,
                password,
                token
            });
        }
    } catch (error) {
        console.error(error)
        res.status(401).send({
            result: false,
            message: "username or password invalid"
        });
    }
}

module.exports = login;