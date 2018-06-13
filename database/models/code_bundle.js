'use strict';
module.exports = (sequelize, DataTypes) => {
  var Code_Bundle = sequelize.define('Code_Bundle', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    code_id: {
      type: DataTypes.INTEGER,
      unique: 'Code_Bundle_item_id',
    },
    bundle_id: {
      type: DataTypes.INTEGER,
      unique: 'Code_Bundle_code_id',
    },
  }, {});
  Code_Bundle.associate = function(models) {
    // associations can be defined here
  };
  return Code_Bundle;
};