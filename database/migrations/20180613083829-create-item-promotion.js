'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Item_Promotions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discount: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      item_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Items',
          key: 'id',
          as: 'item_id'
        },
        unique: 'Item_Promotions_promotion_id'
      },
      promotion_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Promotions',
          key: 'id',
          as: 'promotion_id'
        },
        unique: 'Item_Promotions_item_id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Item_Promotions');
  }
};