'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class System extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      System.hasMany(models.UserSystemIntegration, { foreignKey: 'system_id' });
      System.hasMany(models.OrganizationSystemIntegration, { foreignKey: 'system_id' });

    }
  }
  System.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    version: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'System',
  });
  return System;
};