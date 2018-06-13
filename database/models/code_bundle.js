'use strict';
module.exports = (sequelize, DataTypes) => {
  var Code_Bundle = sequelize.define('Code_Bundle', {
    amount: DataTypes.INTEGER
  }, {});
  Code_Bundle.associate = function(models) {
    // associations can be defined here
  };
  return Code_Bundle;
};