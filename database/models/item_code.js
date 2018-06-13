'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item_Code = sequelize.define('Item_Code', {
    amount: DataTypes.INTEGER
  }, {});
  Item_Code.associate = function(models) {
    // associations can be defined here
  };
  return Item_Code;
};