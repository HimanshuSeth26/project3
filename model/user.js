const mongoose = require("mongoose");

const post_schema = new mongoose.Schema({
    name: {
        type: String,
        required: "Title is Required"

    },
   email: {
        type: String,
        required: "Content is Required"
    },
    phone: {
            type: Number,
            required: "Title is Required"

           },
    topic: {
            type: String,
            required: "Content is Required"
    },
    score: {
        type: Number,
        required: "Content is Required"
    },
    timePreference: {
                     type: String,
                     required: "Title is Required"
                     },
    subscribe: {
                type: Boolean,
                required: "Content is Required"
               }
});
module.exports = mongoose.model("User", post_schema)
