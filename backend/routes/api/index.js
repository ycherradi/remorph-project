const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const homeRouter = require('./home.js');
const campaignRouter = require('./campaign.js');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/home', homeRouter);

router.use('/campaign', campaignRouter)


















module.exports = router;