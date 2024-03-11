'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attendance.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    user_id: DataTypes.STRING,
    event_id: DataTypes.STRING,
    area_id: DataTypes.STRING,
    location: DataTypes.STRING,
    is_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};