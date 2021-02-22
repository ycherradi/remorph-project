'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {name: 'Technology'},
      {name: 'Software'},
      {name: 'Hardware'},
      {name: 'Video Games'},
      {name: 'Accessories'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
