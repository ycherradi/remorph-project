'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    country: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};