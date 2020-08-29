const mongoose = require("mongoose");


// Creating a Schema

const assignschema = new mongoose.Schema({
    employeename:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"NewEmployee",
        required:true
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"task",
        required:true

    },

})
module.exports = mongoose.model("assign", assignschema)
