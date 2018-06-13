'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bundle = sequelize.define('Bundle', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    start_date_sale: {
      allowNull: false,
      type: DataTypes.DATE,
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
  Bundle.associate = function(models) {
    // associations can be defined here
    Bundle.belongsToMany(models.Item, {
      through: {
        model: models.Item_Bundle,
        unique: false,
      },
      foreignKey: 'bundle_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
    Bundle.belongsToMany(models.Code, {
      through: {
        model: models.Code_Bundle,
        unique: false,
      },
      foreignKey: 'bundle_id',
      constraints: false,
      onDelete: 'CASCADE',
    });
  };
  return Bundle;
};