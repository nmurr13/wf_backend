'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Concert extends Model {}
  Concert.init({
    lineup: DataTypes.STRING,
    flyerUrl: DataTypes.STRING,
    date: DataTypes.STRING,
    venue: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Concert',
  });
  return Concert;
};

