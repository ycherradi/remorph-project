'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contributions', [
      {
        amount: '',
        userId: '',
        campaignId: '',
        rewardId: '',
      },
      {
        amount: '',
        userId: '',
        campaignId: '',
        rewardId: '',
      },
      {
        amount: '',
        userId: '',
        campaignId: '',
        rewardId: '',
      },
      {
        amount: '',
        userId: '',
        campaignId: '',
        rewardId: '',
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contributions', null, {});
  }
};
