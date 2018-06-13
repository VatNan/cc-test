'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    start_date_sale: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date_sale:  {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Code, {
      through: {
        model: models.Item_Code,
        unique: false,
      },
      foreignKey: 'item_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
    Item.belongsToMany(models.Promotion, {
      through: {
        model: models.Item_Promotion,
        unique: false,
      },
      foreignKey: 'item_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
    Item.belongsToMany(models.Bundle, {
      through: {
        model: models.Item_Bundle,
        unique: false,
      },
      foreignKey: 'item_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
  };
  return Item;
};