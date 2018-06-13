'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item_Promotion = sequelize.define('Item_Promotion', {
    discount: DataTypes.DECIMAL
  }, {});
  Item_Promotion.associate = function(models) {
    // associations can be defined here
  };
  return Item_Promotion;
};