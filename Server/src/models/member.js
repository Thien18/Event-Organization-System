'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.belongsTo(models.User, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
      Member.belongsTo(models.Group, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
      });
    }
  }
  Member.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    group_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};