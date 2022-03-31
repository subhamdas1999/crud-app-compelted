const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require("body-parser");
const path = require('path');
require('dotenv').config()


//const connectDB = require('./server/database/connection');
//connectDB();




//Alternate way to connect mongoDb with application STARt

const mongoose = require('mongoose');
const DB = "mongodb+srv://admin:admin123@cluster0.tqdjz.mongodb.net/users?retryWrites=true&w=majority"

 mongoose.connect(DB,{

  useNewUrlParser: true,
  useUnifiedTopology: true,
  


 }).then(()=>{

  console.log(`MongoDB connected`);

})
.catch((err)=> {console.log(`no connection`)});





//Alternate way to connect mongoDb with application END









//log message 

app.use(morgan('tiny'))


// mongodb connection



const dotenv = require('dotenv')

dotenv.config({path:'config.env'})

const port = process.env.PORT 





console.log({port});


// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")



//app.set("views", path.resolve(__dirname, "views/folder_B "))


//load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))




// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



// load routes

app.use('/', require('./server/routes/router'))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




