'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.hasMany(models.Workflows, { foreignKey: 'organization_id' });
      Organization.hasMany(models.NetworkOrganization, { foreignKey: 'organization_id' });
      Organization.hasMany(models.UserOrganization, { foreignKey: 'organization_id' });
      Organization.hasMany(models.WebApp, { foreignKey: 'organization_id' });
      Organization.hasMany(models.OrganizationSystemIntegration, { foreignKey: 'organization_id' });

    }
  }
  Organization.init({
    id:{
      type: DataTypes.UUID,
      primaryKey: true

    } ,
    is_active: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    branding_logo: DataTypes.STRING,
    notification_logo: DataTypes.STRING,
    address: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};