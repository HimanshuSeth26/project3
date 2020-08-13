const express = require("express");
const router = express.Router();
const Emp = require("../model/employee");


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
