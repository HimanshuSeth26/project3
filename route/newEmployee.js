const express = require("express");
const router = express.Router();
const User1 = require("../model/newEmployee");
const Assign = require("../model/assigntask");
<<<<<<< HEAD
=======
const Task = require("../model/task");
>>>>>>> 0a491d42ec55cfd4b7631bdb9bec1d6a7c6869e5


router.post("/", async (req, res) => {
    console.log(req.body);
    const user1 = new User1();  // creating an object of an class User1
    user1.employeename = req.body.employeename;
    await user1.save();
    res.send(user1);
});

router.get("/", async (req, res) => {
    const user1 = await User1.find({})
    res.send(user1)
});
// Delete Operation

router.delete("/:user1Id", async (req, res) => {
<<<<<<< HEAD
    
   //const post = await Assign.findByIdAndRemove({employeename:req.params.user1Id }).populate(' task'
   //).exec();
    
      const post = await Assign.find({}).populate('employeename task'
      ).exec();
     console.log("post"+post.employeename)
     const posts = await Assign.findByIdAndRemove({employeename:post._id}).populate(' task'
   ).exec();
   const user1 = await User1.findByIdAndRemove({
    _id: req.params.user1Id
});
     
    res.send(posts)
}) 
=======

  const assign = await Assign.find({ employeename: req.params.user1Id }).exec();
  let taskId=[]
  assign.forEach((item)=>{
    taskId.push(item.task)
  })
  for(i=0;i<taskId.length;i++){
    await Task.findByIdAndRemove({_id: taskId[i]});
  }
  for(i=0;i<assign.length;i++){
    await Assign.findByIdAndRemove({_id: assign[i]._id});
  }
    const user1 = await User1.findByIdAndRemove({
        _id: req.params.user1Id
    });

    res.send(user1)
})
>>>>>>> 0a491d42ec55cfd4b7631bdb9bec1d6a7c6869e5

//GetElementById

router.get("/:user1Id", async (req, res) => {
    const user1 = await User1.findOne({ _id: req.params.user1Id })
    res.send(user1)
});

//Edit or put Operation

router.put("/:user1Id", async (req, res) => {
    const user1 = await User1.findByIdAndUpdate({
        _id: req.params.user1Id
    }, req.body, {
        new: true,
        runValidators: true
    });
    res.send(user1)
});
// router.get("/graph/result", async (req, res) => {
//   try {
//     let a=[]
//     arrayify.map((item)=>{
//     let obj={"task":,"time":}
//     a.push(obj)
//     })
//     res.send(a);
//   }
//   catch (error) {
//     res.sendStatus(500);
//   }
// });

module.exports = router
