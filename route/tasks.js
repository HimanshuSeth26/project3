const router = require("express").Router();
const mongoose = require("mongoose");
const New = require("../model/task");
const Assign = require("../model/assigntask");
const { ObjectId } = require('mongodb');
const post = new Assign();
router.get("/", async (req, res) => {
    try {
        const post = await New.find({})


        res.send(post)

    } catch (error) {
        res.status(500)
    }
});
router.post("/", async (req, res) => {
    try {
    //    console.log(req.body)
        const post = new New();
        post.task = req.body.task;

        await post.save();
        res.send(post)
    } catch (error) {
        res.status(500)
    }

})
router.delete("/:newId", async (req, res) => {
    try {
        const post = await New.findByIdAndRemove({
            _id: req.params.newId
        });
        res.send(post)

    } catch (error) {
        res.send(500)
    }
})
router.get("/task", async (req, res) => {
    const post = await Assign.find({}).populate('employeename task'
    ).exec();
    res.send(post)
});
router.post("/task", async (req, res) => {
    try {
     //   console.log(req.body)


        const user = await New.findByIdAndUpdate({
            _id: req.body.task
        }, { assign: true }, {
            new: true,
            runValidators: true
        });
       // console.log("ghssfdagd" + user)
        const post = new Assign();
        post.employeename = req.body.employeename;
        post.task = req.body.task;

        await post.save();
        res.send(post)

    } catch (error) {
        res.status(500)
    }

});
router.get("/task/:empId", async (req, res) => {
    try {
      //  console.log(req.body)
        const post = await Assign.find({ employeename: req.params.empId }).populate(' task'
        ).exec();
        res.send(post)
    } catch (error) {
        res.status(500);
    }
});
router.get("/:taskId", async (req, res) => {let obj={}
    try {
        // console.log(req.query.empId);
        // console.log(req.params.taskId);
        const post= await Assign.find({ employeename: req.query.empId }).populate(' task'
                  ).exec();
        // console.log(post)
       let a=post.filter(item=>(
         item.task.status===true
       ))
      if(a.length>0){
          objOld= { "finish": new Date(), status:false};
          const updateOld = await New.findByIdAndUpdate({
            _id: a[0].task._id
        }, objOld, {
            new: true,
            runValidators: true
        });
      }
        // console.log(post)
         obj= { "start": new Date(), status:true};
        const update = await New.findByIdAndUpdate({
            _id: req.params.taskId
        }, obj, {
            new: true,
            runValidators: true
        });
      res.send({result:"next task started"})
    } catch (error) {
        res.send(500)
    }
});

module.exports = router;
