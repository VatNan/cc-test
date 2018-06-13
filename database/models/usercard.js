'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCard = sequelize.define('UserCard', {
    card_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: DataTypes.INTEGER,
  }, {});
  UserCard.associate = function(models) {
    // associations can be defined here
    UserCard.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
  };
  return UserCard;
};