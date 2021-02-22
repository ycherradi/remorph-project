'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rewards', [
      {
        name: '',
        description: '',
        userId: '',
        campaignId: '',
      },
      {
        name: '',
        description: '',
        userId: '',
        campaignId: '',
      },
      {
        name: '',
        description: '',
        userId: '',
        campaignId: '',
      },
      {
        name: '',
        description: '',
        userId: '',
        campaignId: '',
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rewards', null, {});
  }
};
