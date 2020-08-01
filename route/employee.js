
const express = require("express");                         //
const mongoose = require("mongoose");
const router = express.Router();                           //   same
const User1 = require("../model/newEmployee");     // require model of user1 and User1 is a class
const Emp = require("../model/employee");
const { ObjectId } = require('mongodb');

// Post operation (require in server.js)

router.post("/", async (req, res) => {

  const user1 = new Emp();  // creating an object of an class User1
  user1.projectname = req.body.projectname;
  user1.employeeName=req.body.employeeName;

  await user1.save();
  res.send(user1);
});
/*router.post("/tasks", async (req, res) => {
  try {
    const post = new Emp();
    post.employeename = req.body.employeename;

    await post.save();
    res.send(post)
  } catch (error) {
    res.status(500)
  }

});*/
// Get operation (require Schema in server.js)

router.get("/", async (req, res) => {
  const user1 = await Emp.find({}).populate('employeeName').exec();

  res.send(user1)

});
module.exports = router
