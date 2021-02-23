'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      media_url: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      goal_amount: {
        allowNull: false,
        type: Sequelize.INTEGER(20)
      },
      amount_generated: {
        allowNull: false,
        type: Sequelize.INTEGER(20)
      },
      locationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Locations'}
      },
      duration: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Categories'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Campaigns');
  }
};