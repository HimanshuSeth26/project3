const router = require("express").Router();
const mongoose = require("mongoose");
const New = require("../model/task");
const Assign=require("../model/assigntask");
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
    try {console.log(req.body)
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
    const post = await Assign.find({  }).populate('employeename task'
    ).exec();
    res.send(post)
  });
  router.post("/task", async (req, res) => {
    try {console.log(req.body)


     const user = await New.findByIdAndUpdate({
            _id: req.body.task
        }, {assign:true}, {
            new: true,
            runValidators: true
        });
    console.log("ghssfdagd"+user)
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
        try {console.log(req.body.employeename)
            const post = await Assign.find({employeename:req.params.empId }).populate(' task'
            ).exec();
            res.send(post)
        } catch (error) {
            res.status(500);
        }
    });

  module.exports = router;
