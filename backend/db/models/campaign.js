'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    media_url: DataTypes.STRING,
    account_type: DataTypes.STRING,
    goal_amount: DataTypes.INTEGER,
    amount_generated: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    duration: DataTypes.DATEONLY,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Campaign.associate = function(models) {
    // associations can be defined here
    Campaign.belongsTo(models.User, { foreignKey: 'userId' });
    Campaign.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Campaign.belongsTo(models.Location, { foreignKey: 'locationId' });

  };
  return Campaign;
};