'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSystemIntegration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserSystemIntegration.belongsTo(models.User, { foreignKey: 'user_id' });
      UserSystemIntegration.belongsTo(models.System, { foreignKey: 'system_id' });

    }
  }
  UserSystemIntegration.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    user_id: DataTypes.UUID,
    system_id: DataTypes.UUID,
    integration_type: DataTypes.STRING,
    config: DataTypes.STRING,
    connection_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserSystemIntegration',
  });
  return UserSystemIntegration;
};