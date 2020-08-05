
const express = require("express");                         //
const mongoose = require("mongoose");
const router = express.Router();                           //   same
const User1 = require("../model/newEmployee");     // require model of user1 and User1 is a class
const Emp = require("../model/employee");
const { ObjectId } = require('mongodb');

// Post operation (require in server.js)

router.post("/", async (req, res) => {
  console.log(req.body)
  const user1 = new Emp();  // creating an object of an class User1
  user1.projectname = req.body.project;
  user1.employeeName=req.body.employee._id;

  await user1.save();
  res.send(user1);
});

router.get("/", async (req, res) => {
  const user1 = await Emp.find({}).populate('employeeName').exec();

  res.send(user1)

});
module.exports = router
