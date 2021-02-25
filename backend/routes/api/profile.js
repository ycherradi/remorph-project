const express = require('express');
const router = express.Router();

const { Campaign, Category, Location, User, Contribution, Reward } = require('../../db/models');
const asyncHandler = require('express-async-handler');



router.get('/', asyncHandler(async(req, res) => {
    const campaigns = await Campaign.findAll({
      include: [Category, Location],
      include: { 
        model: User ,
        include: Reward,
      }
    });

    res.json({campaigns});
})),






module.exports = router;