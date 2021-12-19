const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const login = async(req, res = response ) => {

    const { email, password } = req.body;

    try {

        //Verify email
        //const userDB = await User.findOne({email: email});

        if(!email || !password)
        {
            res.status(404).json({
                ok: false,
                msg: 'Email or Password Invalid.'
            });
        }

        //Verify password
        //const validPassword = bcrypt.compareSync(password, userDB.password );

        //if(!validPassword){
        //    return res.status(400).json({
        //        ok: false,
        //        msg: 'Password not valid'
        //    });
        //}

        // Generate Token JWT
        //const token = await generateJWT(email);
        const token = await generateJWT(email);

        console.log(`Token: ${token}`);

        res.json({
            ok: true,
            token,
            msg: 'Login successful'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact your administrator.'
        })
    }
}

const renewToken = async(req, res = response) => {

    const userid = req.userid;

    // Generate Token JWT
    const token = await generateJWT(userid);

    // Get User by UID
    //const user = await User.findById(userid);

    res.json({
        ok: true,
        token
    });
}


module.exports = {
    login,
    renewToken
}