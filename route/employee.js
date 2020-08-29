const express = require("express");
const router = express.Router();
const Emp = require("../model/employee");
const task = require("../model/task");
const mongoose = require("mongoose");
const State = require("../model/state");

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
router.put("/self", async (req, res) => {
 // console.log(req.body.startTime)
 const user1 = await State.find({ })
 //console.log("user1"+user1.created_at)
 let startTime=req.body.startTime.replace(/['"]+/g, '');
 let endTime=req.body.endTime.replace(/['"]+/g, '');
  //var user=db.collection('task');
  //user.find({"created_on": {"$gte":  epochtime, "$lt":  epoctime}})
  //db.posts.find({"created_on": {"$gte": start, "$lt": end}})
  const posts= await State.find({"created_at": {"$gte": startTime , "$lt": endTime}})

  //console.log(endTime),
  // console.log("posts"+posts),
 
   console.log(posts)
    res.send(posts);
});
module.exports = router
