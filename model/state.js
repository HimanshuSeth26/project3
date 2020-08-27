
const mongoose = require("mongoose");

// Creating a Schema

const state_schema = new mongoose.Schema({
  project: {
    type :mongoose.Schema.Types.ObjectId,
    ref:"project"

  },
  task: {
    type :String,
    required:"task is Required"
},
  state: {
    type: String,
    required: "state is Required"
  },
   created_at    : { type: Date }
  , updated_at    : { type: Date }
  

});
state_schema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model("state", state_schema)
