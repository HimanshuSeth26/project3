const express = require("express");                         //
const router = express.Router();                           //   same
const User1 = require("../model/newEmployee");     // require model of user1 and User1 is a class


// Post operation (require in server.js)

router.post("/", async (req, res) => {

    const user1 = new User1();  // creating an object of an class User1
    user1.employeename = req.body.employeename;
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
});
router.get("/graph/result", async (req, res) => {
  try {
    let arr = [{
        'country': 'One',
        'value': 3025
      }, {
        'country': 'Two',
        'value': 1882
      }, {
        'country': 'Three',
        'value': 1809
      }, {
        'country': 'Four',
        'value': 1322
      }, {
        'country': 'Five',
        'value': 1122
      }, {
        'country': 'Six',
        'value': -1114
      }, {
        'country': 'Seven',
        'value': -984
      }, {
        'country': 'Eight',
        'value': 711
      }, {
        'country': 'Nine',
        'value': 665
      }, {
        'country': 'Ten',
        'value': -580
      }, {
        'country': 'Eleven',
        'value': 443
      }, {
        'country': 'Twelve',
        'value': 441
      }];


    res.send(arr);
  }
  catch (error) {
    res.sendStatus(500);
  }

});


module.exports = router
