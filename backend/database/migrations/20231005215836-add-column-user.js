'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('users', 'street', {
      type: Sequelize.STRING, 
      allowNull: false, 
    });
    queryInterface.addColumn('users', 'number', {
      type: Sequelize.INTEGER, 
      allowNull: false, 
    });
    queryInterface.addColumn('users', 'birth', {
      type: Sequelize.DATE, 
      allowNull: false, 
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};