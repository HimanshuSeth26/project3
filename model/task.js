const mongoose = require("mongoose");

// Creating a Schema  
const schema = new mongoose.Schema({
    task: {
        type: String,
        required: "task is Required"

    },})
module.exports = mongoose.model("task", schema)
