var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var port = 5000

// mongoose.connect("mongodb+srv://UdayAkula:uday@4161@mongooseappcluster.qnuh5.mongodb.net/mongooseAppDB?retryWrites=true&w=majority", { useNewUrlParser: true })
mongoose.connect('mongodb+srv://ashok:Ashok@18@mongooseappcluster.feazr.mongodb.net/mongooseAppDB?retryWrites=true&w=majority',{useNewUrlParser: true})
var x = mongoose.connection
x.once('open', function () {
    console.log('db connected')
  
    // console.log(x.modelNames())
})





var registerRouter = require('./routes/register')
var getUser = require('./routes/getUser')

var cors = require("cors");
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))



 
app.use('/register', registerRouter)
app.use('/users', getUser)

app.listen(port, function() {
    console.log('app listening on port ' + port )
})