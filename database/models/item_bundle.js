'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item_Bundle = sequelize.define('Item_Bundle', {
    amount: DataTypes.INTEGER
  }, {});
  Item_Bundle.associate = function(models) {
    // associations can be defined here
  };
  return Item_Bundle;
};