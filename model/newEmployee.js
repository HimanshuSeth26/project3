const mongoose = require("mongoose");

// Creating a Schema

const post1_schema = new mongoose.Schema({
    employeename: {
        type: String,


        required: "Title is Required"

    },
    dummy:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model("NewEmployee", post1_schema)
