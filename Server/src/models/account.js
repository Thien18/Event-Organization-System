'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsTo(models.Roles, {
        foreignKey: 'role_id',
        onDelete: 'CASCADE'
    });

    }
  }
  Account.init({
    email: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    role_id: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    refreshToken: DataTypes.STRING,
    passwordChangedAt: DataTypes.STRING,
    otpCode: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};