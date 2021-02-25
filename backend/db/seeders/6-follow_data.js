'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      {
        userId: 1,
        campaignId: 3,
      },
      {
        userId: 1,
        campaignId: 4,
      },
      {
        userId: 2,
        campaignId: 1,
      },
      {
        userId: 2,
        campaignId: 2,
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
