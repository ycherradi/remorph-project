'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
      },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};