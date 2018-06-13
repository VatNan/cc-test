'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};