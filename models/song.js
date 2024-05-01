'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {}
  Song.init({
    title: DataTypes.STRING,
    audioUrl: DataTypes.STRING,
    release: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};

