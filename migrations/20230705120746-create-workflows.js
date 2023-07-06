'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Workflows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      organization_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      },
      network_id: {
        type: Sequelize.UUID
      },
      workflow_name: {
        type: Sequelize.STRING
      },
      workflow_step: {
        type: Sequelize.STRING
      },
      workflow_status: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Workflows');
  }
};