const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");

const path = require('path');
//
// mongoose.connect("mongodb://localhost:27017/MyDb",
//   { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//   console.log('mongodb connected')
// });
const databaseUrl='mongodb+srv://mishra11:2911mishra@mycloustor0.gaadp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.set('useCreateIndex', true);

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Database')
});
mongoose.connection.on('error', (err) => {
  if (err) {
    console.log('err', err);
  }
});
require("./model/user"); // require user.js (model)
require("./model/newEmployee"); // require newEmployee.js (model)
require("./model/task"); // require newEmployee.js (model)
require("./model/assigntask");
require("./model/employee");
require("./model/state");

const PORT = process.env.PORT || 4002;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/user", require("./route/posts")) // require route
app.use("/api/user1", require("./route/newEmployee")) // require route
app.use("/api/tasks", require("./route/tasks")) // require route
app.use("/api/employee",require("./route/employee"))
app.use("/api/state",require("./route/state"))

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




