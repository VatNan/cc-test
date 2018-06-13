'use strict';
module.exports = (sequelize, DataTypes) => {
  var Promotion = sequelize.define('Promotion', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    start_date_active: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date_active:  {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Promotion.associate = function(models) {
    // associations can be defined here
    Promotion.belongsToMany(models.Item, {
      through: {
        model: models.Item_Promotion,
        unique: false,
      },
      foreignKey: 'promotion_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
  };
  return Promotion;
};