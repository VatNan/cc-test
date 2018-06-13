'use strict';
module.exports = (sequelize, DataTypes) => {
  var Promotion = sequelize.define('Promotion', {
    name: DataTypes.STRING
  }, {});
  Promotion.associate = function(models) {
    // associations can be defined here
  };
  return Promotion;
};