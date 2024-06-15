const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnections");

class users extends Model {}

users.init(
  {
    userId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "users",
    sequelize,
  }
);

module.exports = users;
