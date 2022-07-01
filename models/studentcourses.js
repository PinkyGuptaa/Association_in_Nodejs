const db = require("../util/db_connection");
const { DataTypes } = require("Sequelize");

const StudentCourses = db.define(
  "studentcourse",
  {
    studentid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      references: {
        model: Student,
        key: "id",
      },
    },
    courseid: {
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
module.exports = StudentCourses;
