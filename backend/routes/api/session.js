//this file will hold the resources for the route paths beginning with '/api/session'
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

// Log in
router.post(
    '/',
    validateLogin,
    asyncHandler(async (req, res, next) => {
        const { credential, password } = req.body;

        const user = await User.login({ credential, password });

        if (!user) {
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid.'];
            return next(err);
        }

        await setTokenCookie(res, user);

        return res.json({
            user
        });
    })
);

// Log out
router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);

// Restore session user
router.get(
    '/',
    restoreUser,
    (req, res) => {
        const { user } = req;
        if (user) {
            return res.json({
                user: user.toSafeObject()
            });
        } else return res.json({});
    }
);

//test empty values (pass vs username) to get bad request and proper errors
// fetch('/api/session', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `A0jwCKn6-vzGYltSIa1LeWzAqVMt9TIQmR-U`
//     },
//     body: JSON.stringify({ credential: '', password: 'password' })
// }).then(res => res.json()).then(data => console.log(data));

// Testing the login above by making fetch call in console at /hello/world for demo user 
//     (tried with email credential as well, and invalid credential which returned 404 and error handling)
// fetch('/api/session', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `MFKJcOoN-d01HNVmLvAuFGphwr4nlqYf7euw`
//     },
//     body: JSON.stringify({ credential: 'DemoUser', password: 'Password1!' })
// }).then(res => res.json()).then(data => console.log(data));

//testing logout route with fetch call in console
// fetch('/api/session', {
//     method: 'DELETE',
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `MFKJcOoN-d01HNVmLvAuFGphwr4nlqYf7euw`
//     }
//   }).then(res => res.json()).then(data => console.log(data));




module.exports = router;
