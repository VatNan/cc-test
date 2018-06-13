'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserCard = sequelize.define('UserCard', {
    card_number: DataTypes.STRING
  }, {});
  UserCard.associate = function(models) {
    // associations can be defined here
  };
  return UserCard;
};