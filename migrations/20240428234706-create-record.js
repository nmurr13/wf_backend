'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.STRING
      },
      trackOne: {
        type: Sequelize.STRING
      },
      trackTwo: {
        type: Sequelize.STRING
      },
      trackThree: {
        type: Sequelize.STRING
      },
      trackFour: {
        type: Sequelize.STRING
      },
      trackFive: {
        type: Sequelize.STRING
      },
      trackSix: {
        type: Sequelize.STRING
      },
      trackSeven: {
        type: Sequelize.STRING
      },
      trackEight: {
        type: Sequelize.STRING
      },
      trackNine: {
        type: Sequelize.STRING
      },
      trackTen: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Records');
  }
};