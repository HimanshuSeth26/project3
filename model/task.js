const mongoose = require("mongoose");

// Creating a Schema  
const schema = new mongoose.Schema({
    task: {
        type: String,
        

    },
    assign: {
        type: Boolean

    },
    start: {
        type: Date,
        //required: "task is Required"

    },
    finish: {
        type: Date,

    },
    trk: [{starttime:Date, pausetime:Date}],
     

    status: {
        type: Boolean,
    }
})
module.exports = mongoose.model("task", schema)
