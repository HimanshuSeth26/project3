const mongoose = require("mongoose");


// Creating a Schema

const assignschema = new mongoose.Schema({
    employeename:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"NewEmployee",
        //required:"name is required"
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"task",
    },

})
module.exports = mongoose.model("assign", assignschema)
