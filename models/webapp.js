'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WebApp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WebApp.belongsTo(models.Organization, { foreignKey: 'organization_id' });
    }
  }
  WebApp.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    organization_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'WebApp',
  });
  return WebApp;
};