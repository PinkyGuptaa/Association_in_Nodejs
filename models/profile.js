const db = require("../util/db_connection");
const { DataTypes } = require("Sequelize");
const Student = require("./student");

const Profile = db.define(
  "profile",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    studentid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: Student,
        key: "id",
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "association",
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Profile;
