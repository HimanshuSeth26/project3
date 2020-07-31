const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");


//database connection

mongoose.connect("mongodb://localhost:27017/MyDb",
  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('mongodb connected')
});


require("./model/user"); // require user.js (model)
require("./model/user1"); // require user1.js (model)



const PORT = 4001;

const app = express();

app.use(bodyParser.json());




app.use(cors());
app.use("/user", require("./route/posts")) // require route
app.use("/user1", require("./route/posts1")) // require route


 // not necessary in operation 

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

