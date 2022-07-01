const express = require("express");
require("dotenv").config();
const app = express();
const Port = process.env.SERVER_PORT || 6001;
const db = require("./util/db_connection");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/student", require("./routes/student.routes"));

app.listen(Port, () => {
  try {
    console.log(`API running at port no. ${Port}!`);
    db.authenticate()
      .then(() => {
        console.log(`${process.env.DB_DIALECT} database is connected!`);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(`Error while running API ${error}!`);
  }
});
