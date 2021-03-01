const express = require('express');
const router = express.Router();

const { Follow, Campaign } = require('../../db/models');
const asyncHandler = require('express-async-handler');




router.get('/', asyncHandler(async(req, res) => {
    const follows = await Follow.findAll({});
    res.json({follows});
}));

router.post('/', asyncHandler(async(req, res) => {
    const { 
    userId,
    campaignId
    } = req.body;
    // const follows = await Follow.findAll({where: userId});
    // console.log('follows', follows)
    const follow = await Follow.create({
        userId,
        campaignId
    })
    res.json({follow});
})),

router.delete('/', asyncHandler(async(req, res) => {
    const { id } = req.body;
    const follow = await Follow.findOne({
        where: {
            id,
        },
    });
    await follow.destroy();

}));


module.exports = router;