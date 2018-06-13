'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCard = sequelize.define('UserCard', {
    card_number: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
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