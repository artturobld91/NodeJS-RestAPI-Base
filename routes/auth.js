const { Router } = require('express');
const { check } = require('express-validator');
const { validatefields } = require('../middlewares/validateFields');
const { login, renewToken } = require('../controllers/authcontroller');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/', 
    [
        check('password', 'The password is obligatory.').not().isEmpty(),
        check('email', 'The email is obligatory.').isEmail(),
        validatefields
    ],
    login 
)

router.get('/renew', 
    validateJWT,
    renewToken 
)

module.exports = router;