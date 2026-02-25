'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DiseaseBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookingId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Bookings',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
      },
      SymptomId: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Symptoms',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
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
    await queryInterface.dropTable('DiseaseBooks');
  }
};