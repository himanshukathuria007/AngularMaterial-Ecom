const { DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define(
  "seller",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    sellername: {
      type: DataTypes.STRING,
    },
    selleremail: {
      type: DataTypes.STRING,
      uniq: true
    },
    sellernumber: {
      type: DataTypes.INTEGER,
    },
    sellerprofileimg: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    sellerpassword: {
      type: DataTypes.STRING,
    },
    sellerproductid: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);
