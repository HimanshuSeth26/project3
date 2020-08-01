
const mongoose = require("mongoose");

// Creating a Schema

const employee_schema = new mongoose.Schema({
  projectname: {
    type: String,
    required: "Project name is Required"

  },
  employeeName: {
    type :mongoose.Schema.Types.ObjectId,
    ref:"NewEmployee",
  }
});
module.exports = mongoose.model("project", employee_schema)
