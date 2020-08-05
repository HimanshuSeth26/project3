
const mongoose = require("mongoose");

// Creating a Schema

const state_schema = new mongoose.Schema({
  project: {
    type :mongoose.Schema.Types.ObjectId,
    ref:"project"

  },
  task: {
    type :mongoose.Schema.Types.ObjectId,
      ref:"task"
},
  state: {
    type: String,
    required: "state is Required"
  }
});
module.exports = mongoose.model("project", employee_schema)
