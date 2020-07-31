const mongoose = require("mongoose");

// Creating a Schema

const post1_schema = new mongoose.Schema({
    employeename: {
        type: String,
        required: "Title is Required"

    },
    email: {
        type: String,
        required: "Content is Required"
    }
});
module.exports = mongoose.model("User1", post1_schema)
