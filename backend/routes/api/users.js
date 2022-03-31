//this file will hold the resources for the route paths beginning with '/api/users'
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user
        });
    })
);

//testing the sign up with a fetch call in the console & tested unique constraints
// fetch('/api/users', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `Coyo8dZb-sbQ2iatznsjA1_lhTRmTZZk6vgI`
//     },
//     body: JSON.stringify({
//         email: 'spidey@spider.man',
//         username: 'Spidey',
//         password: 'password'
//     })
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router;
