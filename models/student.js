const db = require("../util/db_connection");
const { DataTypes } = require("Sequelize");
const Profile = require("./profile");
const Attendance = require("./attendance");

const Student = db.define(
  "student",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    fullname: {
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
//one to one association
Student.hasOne(Profile, { as: "profile", foreignKey: "studentid" });
//one to many association
Student.hasMany(Profile, { as: "profileList", foreignKey: "studentid" });
Student.hasMany(Attendance, { as: "attendance", foreignKey: "studentid" });

module.exports = Student;
