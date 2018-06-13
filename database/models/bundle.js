'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bundle = sequelize.define('Bundle', {
    name: DataTypes.STRING
  }, {});
  Bundle.associate = function(models) {
    // associations can be defined here
  };
  return Bundle;
};