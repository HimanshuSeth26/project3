const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User1 = require("../model/employee");
const Task= require("../model/task");
const Emp = require("../model/state");
const { ObjectId } = require('mongodb');


router.post("/", async (req, res) => {
console.log("hii")
  const user1 = new Emp();// creating an object of an class User1
  user1.project = req.body.project._id;
  user1.task = req.body.tasks;
  user1.state= req.body.status;
  await user1.save();
  res.send(user1);
});

router.get("/", async (req, res) => {
  //console.log("hii get")

  const user1 = await Emp.find({}).populate('project').exec();

  res.send(user1)

});

router.delete("/:user1Id", async (req, res) => {

  const user1 = await Emp.findByIdAndRemove({
    _id: req.params.user1Id
  });
  res.send(user1)

})


//getElementById
router.get("/:user1Id", async (req, res) => {

  const user1 = await Emp.find({ project: req.params.user1Id })
  res.send(user1)
});



router.put("/:user1Id", async (req, res) => {

    const user1 = await Emp.findByIdAndUpdate({
      _id: req.params.user1Id
    }, req.body, {
      new: true,
      runValidators: true
    });

    res.send(user1)
  }
);
module.exports = router
