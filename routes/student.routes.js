const Student = require("../models/student");
const ProfileMenu = require("../models/profile");
const Attendance = require("../models/attendance");
const router = require("express").Router();

//one to one
router.get("/get", (req, res) => {
  Student.findAll({
    include: [
      {
        model: ProfileMenu,
        as: "profile",
      },
    ],
  })
    .then((list) => {
      res.status(200).send(list);
    })
    .catch((err) => {
      res.status(204).send(err);
    });
});

//one to many
router.get("/attendance", (req, res) => {
  Student.findAll({
    include: [
      {
        model: ProfileMenu,
        as: "profile",
      },
      {
        model: Attendance,
        as: "attendance",
        required: false,
      },
    ],
  })
    .then((list) => {
      res.status(200).send(list);
    })
    .catch((err) => {
      res.status(204).send(err);
    });
});

module.exports = router;
