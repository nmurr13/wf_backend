'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {}
  Record.init({
    title: DataTypes.STRING,
    label: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    trackOne: DataTypes.STRING,
    trackTwo: DataTypes.STRING,
    trackThree: DataTypes.STRING,
    trackFour: DataTypes.STRING,
    trackFive: DataTypes.STRING,
    trackSix: DataTypes.STRING,
    trackSeven: DataTypes.STRING,
    trackEight: DataTypes.STRING,
    trackNine: DataTypes.STRING,
    trackTen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};

