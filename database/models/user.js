'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserCard, { foreignKey: 'user_id' });
    User.hasMany(models.Code, { foreignKey: 'user_id' });
  };
  return User;
};