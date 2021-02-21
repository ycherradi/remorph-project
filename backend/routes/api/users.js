const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();



const validateSignup = [
  check('first_name')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a first name with at least 2 characters.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a last name with at least 2 characters.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];



// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password, username } = req.body;
    const user = await User.signup({ firstname, lastname, email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);





module.exports = router;