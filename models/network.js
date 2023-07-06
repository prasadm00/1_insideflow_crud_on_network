'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Network extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Network.hasMany(models.NetworkOrganization, { foreignKey: 'network_id' });

    }
  }
  Network.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true

    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    international_territory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Network',
  });
  return Network;
};