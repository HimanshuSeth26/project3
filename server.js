const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");
// mongoose.connect("mongodb+srv://sawan:sawan@cluster0-nxos0.mongodb.net/test?retryWrites=true&w=majority/PM",
//   { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//   console.log('mongodb connected')
// });

const url='mongodb+srv://mishra11:2911mishra@mycloustor0.gaadp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
  console.log('mongodb connected');
})
require("./model/user"); // require user.js (model)
require("./model/newEmployee"); // require newEmployee.js (model)
require("./model/task"); // require newEmployee.js (model)
require("./model/assigntask");
require("./model/employee");
require("./model/state");

const PORT =process.env.PORT || 4001;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/user", require("./route/posts")) // require route
app.use("/user1", require("./route/newEmployee")) // require route
app.use("/tasks", require("./route/tasks")) // require route
// app.use("/assign",require("./route/tasks"))
app.use("/employee",require("./route/employee"))
app.use("/state",require("./route/state"))

app.get('/', function (req, res) {
    res.send('Hello from server');
 })

 app.post('/enroll', function (req, res) {
    console.log(req.body);
    res.status(200).send({"message": "Data received"})
 })

 app.listen(PORT, function(){
  console.log("Server running on localhost:" + PORT);
});




