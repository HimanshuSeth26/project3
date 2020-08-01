const express = require("express");
const router = express.Router();
const User = require("../model/user");


router.post("/", async (req, res) => {

    console.log(req.body)

    const user = new User();  // creating an object of an class User
    user.name = req.body.name
    user.email = req.body.email
    user.phone = req.body.phone
    user.topic = req.body.topic
    user.score = req.body.score
    user.timePreference = req.body.timePreference
    user.subscribe = req.body.subscribe;
    await user.save();
    res.send(user);
});


router.get("/", async (req, res) => {


    const user = await User.find({})
    res.send(user)

});

router.delete("/:userId", async (req, res) => {

    const user = await User.findByIdAndRemove({
        _id: req.params.userId
    });
    res.send(user)

})


router.get("/:userId", async (req, res) => {

    const user = await User.findOne({ _id: req.params.userId })
    res.send(user)

});

router.put("/:userId", async (req, res) => {

    const user = await User.findByIdAndUpdate({
        _id: req.params.userId
    }, req.body, {
        new: true,
        runValidators: true
    });

    res.send(user)
}
);


module.exports = router
