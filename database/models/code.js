'use strict';
module.exports = (sequelize, DataTypes) => {
  var Code = sequelize.define('Code', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active:  {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    user_id: DataTypes.INTEGER,
  }, {});
  Code.associate = function(models) {
    // associations can be defined here
    Code.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
    Code.belongsToMany(models.Item, {
      through: {
        model: models.Item_Code,
        unique: false,
      },
      foreignKey: 'code_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
    Code.belongsToMany(models.Bundle, {
      through: {
        model: models.Item_Bundle,
        unique: false,
      },
      foreignKey: 'code_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
  };
  return Code;
};