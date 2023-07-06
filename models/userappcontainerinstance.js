'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAppContainerInstance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAppContainerInstance.belongsTo(models.User, { foreignKey: 'user_id' });

    }
  }
  UserAppContainerInstance.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    metadata: DataTypes.STRING,
    prefernces: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserAppContainerInstance',
  });
  return UserAppContainerInstance;
};