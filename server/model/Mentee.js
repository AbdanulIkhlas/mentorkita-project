const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Mentee = sequelize.define(
  "mentees",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profilePict: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    about: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Mentee;
