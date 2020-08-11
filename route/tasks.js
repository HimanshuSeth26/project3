const router = require("express").Router();
const mongoose = require("mongoose");
const New = require("../model/task");
const Assign = require("../model/assigntask");
const { ObjectId } = require('mongodb');
const { registerOutsideClick } = require("ngx-bootstrap");

  const post = new Assign();
  router.get("/taskOngoing", async (req, res) => {
    try {
        const post = await New.find({})
      console.log("post")
      let a = post.filter(item => (
        item.status === true
    ))
    console.log(a)
        res.send(a)

    } catch (error) {
        res.status(500)
    }})
  router.get("/", async (req, res) => {
    try {
        const post = await New.find({})


        res.send(post)

    } catch (error) {
        res.status(500)
    }
});
router.post("/newTask", async (req, res) => {
    try {
        console.log(req.body)
        const post = new New();
        post.task = req.body.task;
        await post.save();
        res.send(post)
    } catch (error) {
        res.status(500)
    }
})

router.post("/selfAssign", async (req, res) => {
    try {
        //console.log(req.body)
        const post = new New();
        obj = { "task": req.body.task, "start": new Date(), status: true };
        post.task = obj.task;
        post.start = obj.start;
        post.status = obj.status;
        await post.save();
        const pst = await New.find({})
       //  console.log(pst)    
      
            b = pst.filter(item => (
                item.status === true
            ))
        console.log(b)
        if (b.length > 0) {
            objOld = { "finish": new Date(), status: false };
            const updateOld = await New.findByIdAndUpdate({
                _id: b[0]._id
            }, objOld, {
                new: true,
                runValidators: true
            });
        }
        const assign = new Assign();
        //console.log(req.body.employeename)
        assign.employeename = req.body.employeename;
        assign.task = pst[pst.length - 1]._id
        await assign.save();
        req.send(assign)
    } catch (error) {
        res.status(500)
    }

})
// router.post("/:postId", async (req, res) => {
//     try {
//         //    console.log(req.body)
//         const post = new New();
//         post.task = req.body.task;

//         await post.save();

//         res.send(post)
//     } catch (error) {
//         res.status(500)
//     }

// })
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
router.get("/:taskId", async (req, res) => {
    let obj = {}
    try {

        // console.log(req.query.empId);
        // console.log(req.params.taskId);
        const post = await Assign.find({ employeename: req.query.empId }).populate(' task'
        ).exec();
        // console.log(post)
        let a = post.filter(item => (
            item.task.status === true
        ))
        if (a.length > 0) {
            objOld = { "finish": new Date(), status: false };
            const updateOld = await New.findByIdAndUpdate({
                _id: a[0].task._id
            }, objOld, {
                new: true,
                runValidators: true
            });
        }
        // console.log(post)
        obj = { "start": new Date(), status: true };
        const update = await New.findByIdAndUpdate({
            _id: req.params.taskId

        }, obj, {
            new: true,
            runValidators: true
        });
        res.send({ result: "next task started" })
    } catch (error) {
        res.send(500)
    }
});

module.exports = router;
