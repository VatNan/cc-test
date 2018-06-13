'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item_Code = sequelize.define('Item_Code', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code_id: {
      type: DataTypes.INTEGER,
      unique: 'Item_Code_item_id',
    },
    item_id: {
      type: DataTypes.INTEGER,
      unique: 'Item_Code_code_id',
    },
  }, {});
  Item_Code.associate = function(models) {
    // associations can be defined here
  };
  return Item_Code;
};