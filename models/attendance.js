const db = require("../util/db_connection");
const { DataTypes } = require("Sequelize");
const Student = require("./student");

const Attendance = db.define(
  "attendance",
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
    absent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    schema: "association",
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Attendance;
