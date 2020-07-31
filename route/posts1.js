const express = require("express");                         // 
const router = express.Router();                           //   same
const User1 = require("../model/user1");     // require model of user1 and User1 is a class 


// Post operation (require in server.js)

router.post("/", async (req, res) => {

    const user1 = new User1();  // creating an object of an class User1
    user1.username = req.body.username
    user1.password = req.body.password;
    await user1.save();
    res.send(user1);
});

// Get operation (require Schema in server.js)

router.get("/", async (req, res) => {


    const user1 = await User1.find({})
    res.send(user1)

});






// Delete Operation
 
router.delete("/:user1Id", async (req, res) => {

    const user1 = await User1.findByIdAndRemove({
        _id: req.params.user1Id
    });
    res.send(user1)

})

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
}
 

);

module.exports = router