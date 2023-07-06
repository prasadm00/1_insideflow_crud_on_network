'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserOrganization, { foreignKey: 'user_id' });
      User.hasMany(models.UserSystemIntegration, { foreignKey: 'user_id' });
      User.hasMany(models.UserAppContainerInstance, { foreignKey: 'user_id' });

    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    name: DataTypes.STRING,
    npi: DataTypes.STRING,
    auth_identity: DataTypes.STRING,
    type: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};