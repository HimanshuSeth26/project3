// importing module

var express = require('express');
// var mongoose=require('mongoose');
var bodyparser = require('body-parser');
// var cors=require('cors');
var path = require('path');

var app = express();
app.use(bodyparser.json());
// app.use(cors());

//connect to mongo db
// mongoose.connect('mongodb://localhost:27017/app');
//on connection

/*mongoose.connection.on('connected',()=>{
    console.log('Connected to Database')
})
mongoose.connection.on('error',(err)=>{
if(err){
    console.log('err',err);

}
    // console.log('Connected to Database')
})*/

const port = process.env.PORT || 3000;



//staticfile
app.use(express.static(path.join(__dirname, './dist/material-admin')));
// app.use(express.static(path.join(__dirname ,'public')));

//testing
app.get('/', (req, res) => {
    res.send('foobar');
})

app.listen(port, () => {
    console.log('server started at port:' + port)
});


