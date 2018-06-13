'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item_Promotion = sequelize.define('Item_Promotion', {
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      unique: 'Item_Promotion_promotion_id',
    },
    promotion_id: {
      type: DataTypes.INTEGER,
      unique: 'Item_Promotion_item_id',
    },
  }, {});
  Item_Promotion.associate = function(models) {
    // associations can be defined here
  };
  return Item_Promotion;
};