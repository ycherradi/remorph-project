const express = require('express');
const router = express.Router();

const { Campaign, Category, Location, User, Reward } = require('../../db/models');
const asyncHandler = require('express-async-handler');



router.get('/', asyncHandler(async(req, res) => {
    const campaign = await Campaign.findAll({
      include: [Category, Location, 
        {
          model: User,
          include:Reward,
        }
      ],
    });
  

    res.json({campaign});
})),






module.exports = router;