'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reward = sequelize.define('Reward', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    campaignId: DataTypes.INTEGER
  }, {});
  Reward.associate = function(models) {
    // associations can be defined here
    Reward.belongsTo(models.User, { foreignKey: 'userId' });
    Reward.belongsTo(models.Campaign, { foreignKey: 'campaignId' });

  };
  return Reward;
};