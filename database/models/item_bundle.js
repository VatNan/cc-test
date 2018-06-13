'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item_Bundle = sequelize.define('Item_Bundle', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      unique: 'Item_Bundle_bundle_id',
    },
    bundle_id: {
      type: DataTypes.INTEGER,
      unique: 'Item_Bundle_item_id',
    },
  }, {});
  Item_Bundle.associate = function(models) {
    // associations can be defined here
  };
  return Item_Bundle;
};