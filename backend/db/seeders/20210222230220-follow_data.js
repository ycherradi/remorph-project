'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      {
        userId: '',
        campaignId: '',
      },
      {
        userId: '',
        campaignId: '',
      },
      {
        userId: '',
        campaignId: '',
      },
      {
        userId: '',
        campaignId: '',
      },
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
