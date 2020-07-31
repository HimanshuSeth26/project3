const mongoose = require("mongoose");

// Creating a Schema  

const post1_schema = new mongoose.Schema({
    username: {
        type: String,
        required: "Title is Required"

    },
    password: {
        type: String,
        required: "Content is Required"
    }
});
module.exports = mongoose.model("User1", post1_schema)