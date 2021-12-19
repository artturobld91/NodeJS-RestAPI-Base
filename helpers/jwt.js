const jwt = require('jsonwebtoken');

const generateJWT = ( userid ) => {

    return new Promise((resolve, reject) => {

        // INFO: You can put more items on payload like name, role, etc.
        const payload = {
            userid
        }

        console.log(payload);

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, (err, token) => {
            if( err ) 
            {
                console.log(err);
                reject('Web token was not generated');
            } else 
            {
                resolve( token );
            }
        });

    });
    
}

module.exports = {
    generateJWT,
}