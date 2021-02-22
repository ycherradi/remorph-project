'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contribution = sequelize.define('Contribution', {
    amount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    campaignId: DataTypes.INTEGER,
    rewardId: DataTypes.INTEGER
  }, {});
  Contribution.associate = function(models) {
    // associations can be defined here
    Contribution.belongsTo(models.User, { foreignKey: 'userId' });
    Contribution.belongsTo(models.Campaign, { foreignKey: 'campaignId' });
    Contribution.hasMany(models.Reward, { foreignKey: 'rewardId' });

  };
  return Contribution;
};