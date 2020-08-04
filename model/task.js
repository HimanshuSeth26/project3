const mongoose = require("mongoose");

// Creating a Schema  
const schema = new mongoose.Schema({
    task: {
        type: String,
        required: "task is Required"

    },
    assign:{
        type:Boolean,
        
    }
})
module.exports = mongoose.model("task", schema)
