const db = require("../util/db_connection");
const { DataTypes } = require("Sequelize");
const Student = require("./student");

const Course = db.define(
  "course",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    coursename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    schema: "association",
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Course;
