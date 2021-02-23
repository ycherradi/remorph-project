'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contributions', [
      {
        amount: 200000,
        userId: 1,
        campaignId: 3,
        rewardId: 3,
      },
      {
        amount: 50000,
        userId: 1,
        campaignId: 4,
        rewardId: 4,
      },
      {
        amount: 100000,
        userId: 2,
        campaignId: 1,
        rewardId: 1,
      },
      {
        amount: 42000,
        userId: 2,
        campaignId: 2,
        rewardId: 2,
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contributions', null, {});
  }
};
