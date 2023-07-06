'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workflows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Workflows.belongsTo(models.Organization, { foreignKey: 'organization_id' });
    }
  }
  Workflows.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    organization_id: DataTypes.UUID,
    network_id: DataTypes.UUID,
    workflow_name: DataTypes.STRING,
    workflow_step: DataTypes.STRING,
    workflow_status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Workflows',
  });
  return Workflows;
};