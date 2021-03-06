'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    provider: DataTypes.STRING,
    price: DataTypes.FLOAT,
    rate: DataTypes.FLOAT,
    credits: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};