const express = require("express");
const router = express.Router();
const User1 = require("../model/newEmployee");
const Assign = require("../model/assigntask");
const Task = require("../model/task");
const Emp = require("../model/employee");

router.post("/", async (req, res) => {
   // console.log(req.body);
    const user1 = new User1();  // creating an object of an class User1
    user1.employeename = req.body.employeename;
    user1.dummy = req.body.dummy;

  await user1.save();
    res.send(user1);
});

router.get("/", async (req, res) => {
    const user1 = await User1.find({})
  console.log(user1)
  let employee =[]
  user1.forEach(item=>{
    if(item.dummy===false){
      employee.push(item)
    }
  })
    res.send(employee)
});
// Delete Operatio


router.delete("/:user1Id", async (req, res) => {
  const user = await User1.findById({ _id: req.params.user1Id}).exec();
  console.log(user)

  const assign = await Assign.find({ employeename: req.params.user1Id }).exec();

     let taskId=[]
     if(assign.length>0) {
       assign.forEach((item) => {
         taskId.push(item.task)
       })
       for (i = 0; i < taskId.length; i++) {
         await Task.findByIdAndRemove({_id: taskId[i]});
       }
       for (i = 0; i < assign.length; i++) {
         await Assign.findByIdAndRemove({_id: assign[i]._id});
       }
     }

  const user1 = await Emp.find({ employeeName: req.params.user1Id}).exec();
     if(user1.length>0){
       let empId=[]
       user1.forEach((item)=>{
         empId.push(item._id)
       })
       obj={"employeeName":'5f49c19d5ad27849a06df32b'}
       const use = await Emp.findByIdAndUpdate({
           _id: empId[0]
         }, obj, {
           new: true,
           runValidators: true
         });
     }

  //console.log(empId)

  const user2 = await User1.findByIdAndRemove({
      _id: req.params.user1Id
    });
    res.send({result:"data deleated"})

 })

//GetElementById

router.get("/:user1Id", async (req, res) => {
 // console.log("himan")
    const user1 = await User1.findOne({ _id: req.params.user1Id })
    res.send(user1)
});
router.get("/:user1Id/upadteproject", async (req, res) => {
  //console.log("himan")
    const user1 = await Emp.findOne({ _id: req.params.user1Id }).populate('employeeName'
    ).exec();
    res.send(user1)
});
router.delete("/:user1Id/project", async (req, res) => {
  const user1 = await Emp.findByIdAndRemove({ _id: req.params.user1Id })
  res.send(user1)
 // console.log("abcdfhjk")
});
//Edit or put Operation
router.put("/:user1Id/upadteproject", async (req, res) => {
  //console.log("put is runing"+req.params)
    const user1 = await Emp.findByIdAndUpdate({
        _id: req.params.user1Id
    }, req.body, {
        new: true,
        runValidators: true
    });
    res.send(user1)
});

router.put("/:user1Id", async (req, res) => {
 // console.log("put is runing"+req.params)
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

module.exports = router;
