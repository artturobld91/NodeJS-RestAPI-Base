const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {

    // Read Token
    const token = req.header('x-token')
    console.log('Token: ' + token);

    if(!token)
    {
        return res.status(401).json({
            ok: false,
            msg: 'Token is not present in request'
        });
    }

    try {
        
        const { userid } = jwt.verify(token, process.env.JWT_SECRET);
        req.userid = userid;
        console.log('userid: ' + userid);
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token not Valid'
        });
    }

}

module.exports = {
    validateJWT,
}