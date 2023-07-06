'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrganizationSystemIntegrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      integration_type: {
        type: Sequelize.STRING
      },
      config: {
        type: Sequelize.STRING
      },
      organization_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      },
      system_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Systems',
          key: 'id'
        }
      },
      connectionId: {
        type: Sequelize.UUID
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
    await queryInterface.dropTable('OrganizationSystemIntegrations');
  }
};