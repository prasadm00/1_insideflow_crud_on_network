'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NetworkOrganization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NetworkOrganization.belongsTo(models.Organization, { foreignKey: 'organization_id' });
      NetworkOrganization.belongsTo(models.Network, { foreignKey: 'network_id' });

    }
  }
  NetworkOrganization.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    organization_id: DataTypes.UUID,
    network_id: DataTypes.UUID,
    onboarded_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'NetworkOrganization',
  });
  return NetworkOrganization;
};