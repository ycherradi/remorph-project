const express = require('express');
const router = express.Router();

const { Campaign, Category, Location, User, Reward } = require('../../db/models');
const asyncHandler = require('express-async-handler');




router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const campaign = await Campaign.findOne({
        where: {
            id,
        },
        include: [Category, Location]
    });
    res.json({campaign});
}));



module.exports = router;