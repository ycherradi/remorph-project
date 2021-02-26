const express = require('express');
const router = express.Router();

const { Campaign } = require('../../db/models');
const asyncHandler = require('express-async-handler');




router.delete('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const campaign = await Campaign.findOne({
        where: {
            id,
        },
    });
    await campaign.destroy();

}));



module.exports = router;