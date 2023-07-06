'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOrganization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserOrganization.belongsTo(models.Organization, { foreignKey: 'organization_id' });
      UserOrganization.belongsTo(models.User, { foreignKey: 'user_id' });

    }
  }
  UserOrganization.init({
    organization_id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserOrganization',
  });
  return UserOrganization;
};