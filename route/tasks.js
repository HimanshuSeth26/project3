const express = require("express");
const router = express.Router();
const New = require("../model/task");
const Assign = require("../model/assigntask");
const { time } = require("console");
const task = require("../model/task");


router.get("/taskOngoing", async (req, res) => {
  try {
    const posts= await Assign.find({}).populate('employeename task'
    ).exec();
    //  console.log(posts)
    let a = posts.filter(item => (
      item.task.status === true
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
        // console.log(req.body)
        const post = new New();
        post.task = req.body.task;
        await post.save();
        res.send(post)
        const pst = await New.find({})
        // console.log(pst[pst.length-1]._id)
        const assign= new Assign();
        //console.log(req.body.employeename)
        assign.employeename=req.body.employeename,
        assign.task=pst[pst.length-1]._id
        await assign.save();
        req.send(assign)
    } catch (error) {
        res.status(500)
    }
})


router.post("/selfAssign", async (req, res) => {
    try {
      console.log(req.body)
      const posts= await Assign.find({employeename:req.body.employeename}).populate('employeename task'
      ).exec();
      console.log(posts)
      let b = posts.filter(item=>(
        item.task.status===true
      ))
      if (posts.length > 0) {
        objOld = {"finish": new Date(), status: false};
        const updateOld = await New.findByIdAndUpdate({
          _id: b[0].task._id
        }, objOld, {
          new: true,
          runValidators: true
        });
        console.log("old updated")

        const task = new New();
        task.task = req.body.task;
        task.assign=true;
        task.status=true;
        task.start=new Date();
        await task.save();

        const assign= new Assign();
        assign.employeename=req.body.employeename
        assign.task=task._id
        await assign.save();

        res.send({ result:"old updated , new task started" })

      }
      if(posts.length===0){
        const task = new New();
        task.task = req.body.task;
        task.assign=true;
        task.status=true;
        task.start=new Date();
        await task.save();

        const assign= new Assign();
        assign.employeename=req.body.employeename
        assign.task=task._id
        await assign.save();
        res.send({ result:" new task started" })

      }

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
          // console.log(req.body)
          const user = await New.findByIdAndUpdate({
            _id: req.body.task
        }, { assign: true }, {
            new: true,
            runValidators: true
        });
        const assign = new Assign();
        assign.employeename = req.body.employeename;
        assign.task = req.body.task;
        await assign.save();
      // console.log("assign")
      // console.log(assign)
        res.send(assign)

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
      res.send({ result:"task started" })
  } catch (error) {
      res.send(500)
  }
});
router.put("/:taskId", async (req, res) => {
    try {
      //  console.log(req.query);
        
        // const post = await Assign.find({ employeename: req.query.empId }).populate(' task'
        // ).exec();
       
       const user = await New.findOne({
            _id: req.params.taskId,})
            
        user.status=false  
      //  pause=new Date()
        trks={starttime:user.start, pausetime:new Date()},
        console.log(pausetime)
        user.trk.push( trks)
        await user.save();
      
           //safe:true,upsert:true
      
         res.send({ result:"task started" })
    } catch (error) {
        res.send(500)
    }
});
router.get("/asp/:empId",async(req,res)=>{
    try{
        const post = await Assign.find({ employeename:req.params.empId }).populate(' task'
         ).exec();
       
    post.forEach(item =>
    // for(j=0;j<trk.length;j++){
    console.log(post[item].task.trk[0].starttime)})
  //  epochtime=new Date(post[i].task.trk.slice(0,).starttime).getTime();
    //console.log(epochtime)
    //epochtim=new Date(post[i].task.trk[0].pausetime).getTime();
    //console.log(epochtim)
    res.send("abc")
    
    }catch(error){
        res.send(500)
    }
})
module.exports = router;
