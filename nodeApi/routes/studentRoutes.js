const express = require("express");
const StudentRouter = express.Router();
const {getStudents,searchStudent} = require("../controller/studentController");

StudentRouter.get("/students",getStudents)
StudentRouter.post("/search",searchStudent)
module.exports = StudentRouter