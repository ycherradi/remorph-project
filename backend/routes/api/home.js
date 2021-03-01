const express = require('express');
const router = express.Router();

const { Campaign, Category, Location, User, Reward } = require('../../db/models');
const asyncHandler = require('express-async-handler');



router.get('/', asyncHandler(async(req, res) => {
    const location = await Location.findAll();
    const category = await Category.findAll();
    const campaign = await Campaign.findAll({
      include: [Category, Location, 
        {
          model: User,
          include:Reward,
        }
      ],
    });
  

    res.json({campaign, category, location});
})),

router.post('/', asyncHandler(async(req, res) => {
    const { title, 
      description, 
      media_url, 
      categoryId, 
      locationId, 
      goal_amount, 
      amount_generated, 
      duration,
      userId } = req.body;

      const campaign = await Campaign.create({
        title, 
        description, 
        media_url, 
        categoryId, 
        locationId, 
        goal_amount, 
        amount_generated, 
        duration,
        userId
      })
  

    res.json({campaign});
})),







module.exports = router;