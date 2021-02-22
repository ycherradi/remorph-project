'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: DataTypes.INTEGER,
    campaignId: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    // associations can be defined here
    Follow.belongsTo(models.User, { foreignKey: 'userId' });
    Follow.hasMany(models.Campaign, { foreignKey: 'campaignId' });
  };
  return Follow;
};