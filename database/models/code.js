'use strict';
module.exports = (sequelize, DataTypes) => {
  var Code = sequelize.define('Code', {
    name: DataTypes.STRING
  }, {});
  Code.associate = function(models) {
    // associations can be defined here
  };
  return Code;
};