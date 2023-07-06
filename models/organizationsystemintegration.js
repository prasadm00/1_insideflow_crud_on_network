'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrganizationSystemIntegration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrganizationSystemIntegration.belongsTo(models.System, { foreignKey: 'system_id' });
      OrganizationSystemIntegration.belongsTo(models.Organization, { foreignKey: 'organization_id+' });

    }
  }
  OrganizationSystemIntegration.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    integration_type: DataTypes.STRING,
    config: DataTypes.STRING,
    organization_id: DataTypes.UUID,
    system_id: DataTypes.UUID,
    connectionId: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OrganizationSystemIntegration',
  });
  return OrganizationSystemIntegration;
};