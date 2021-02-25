'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rewards', [
      {
        name: 'TurboHub (4TB) + Free Gift',
        description: 'Want to upgrade your laptop? Get 1xTurboHub (4TB) for US$341 (MSRP: $739). 4TB extra storage. 6 additional ports. Fast data transfer. 14-day satisfaction guarantee. Guaranteed delivery. 1-year warranty + Leather Pouch as a GIFT. Save US$413 now!',
        userId: 1,
        campaignId: 1,
      },
      {
        name: 'KNECT Band Family Pack',
        description: 'Never let your phone die on you again. Get peace of mind with our handy go anywhere charger for over 40% off our $300 MSRP, limited time only. Get any 4 KNECT bands, any color, and size. You can get one for each dress occasion, or mix and match with your family and friends.',
        userId: 1,
        campaignId: 2,
      },
      {
        name: 'Super Design Bird',
        description: 'Be one of the first to receive the 4K UHD, ultra-thin, light-weighted 6D Shark Touch-Screen Monitor for ultra-clear viewing pleasure, the 4096 levels capacitive stylus, and our in-house designed screen protector with 42% OFF! Save $298 from our MSRP $707!',
        userId: 2,
        campaignId: 3,
      },
      {
        name: 'Basic Mudra',
        description: 'Get the Touch Free Control experience on your Apple Watch at a great price! Save 28%! You will pick your preferred band size and color (black/white) in a survey that will be sent to you before the shipment starts.',
        userId: 2,
        campaignId: 4,
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rewards', null, {});
  }
};
