'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campaigns', [
      { 
        title: '',
        description: '',
        media_url: '',
        goal_amount: '',
        amount_generated: '',
        duration: '',
        userId: '',
        locationId: '',
        categoryId: '',
      },
      { 
        title: '',
        description: '',
        media_url: '',
        goal_amount: '',
        amount_generated: '',
        duration: '',
        userId: '',
        locationId: '',
        categoryId: '',
      },
      { 
        title: '',
        description: '',
        media_url: '',
        goal_amount: '',
        amount_generated: '',
        duration: '',
        userId: '',
        locationId: '',
        categoryId: '',
      },
      { 
        title: '',
        description: '',
        media_url: '',
        goal_amount: '',
        amount_generated: '',
        duration: '',
        userId: '',
        locationId: '',
        categoryId: '',
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campaigns', null, {});
  }
};
