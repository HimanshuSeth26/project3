import {from} from "rxjs";
import {to} from "rxjs";
const express = require("express");
const router = express.Router();
const Emp = require("../model/state");

router.post("/", async (req, res) => {
  const user1 = new Emp();// creating an object of an class User1
  user1.project = req.body.project._id;
  user1.task = req.body.tasks;
  user1.state= req.body.status;
  user1.created_at = new Date();
  await user1.save();
  res.send(user1);
});

router.post("/daterange", async (req, res) => {

  let start= req.body.start;
  let end = req.body.end;
  let project= req.body.project;
  console.log(start)
  console.log(end)
  console.log(project)
  const user1 = await Emp.find({project: project})
  // const filter = { created_at:{$gte:from||start,$lte:to|| end}}

  res.send({"employeename":"rahul"});
});

router.get("/", async (req, res) => {
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
router.get("/:userId", async (req, res) => {
  const user1 = await Emp.find({project: req.params.userId})
  res.send(user1)
});

/*let task = decodeURIComponent(req.params.task);
console.log(task)*/



router.get("/id/:user1Id/:task", async (req, res) => {
  let task = decodeURIComponent(req.params.task);
  console.log(task)
  const user1 = await Emp.find({ project: req.params.user1Id,task:task})
  res.send(user1)
});

router.put("/:id", async (req, res) => {
 // console.log(req.params.id)
  //console.log(req.body)
  let obj={task:req.body.tasks,state:req.body.status}
    const user1 = await Emp.findByIdAndUpdate({
      _id: req.params.id
    }, obj, {
      new: true,
      runValidators: true
    });
    res.send(user1)
  }
);
module.exports = router
