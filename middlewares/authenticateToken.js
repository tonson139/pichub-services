const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        if (token == null) 
            return res.status(401).json({
                result: false,
                message: "Token not found"
            })
        const isVerify = await jwt.verify(token, process.env.TOKEN_SECRET)
        if(isVerify) 
            next();

    } catch(error) {
        res.status(403).json({
            result: false,
            message: "Failed to authenticate token"
        })
    }
}

module.exports = authenticateToken;