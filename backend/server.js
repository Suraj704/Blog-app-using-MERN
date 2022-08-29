const express = require('express')
const app = express()
require('./dbConnection/dbConnectivity')
const router = require("./routes/user-routes");
const blogRouter =require("./routes/blog-routes");
const cors=require('cors')
const morgan=require('morgan')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('combined'))

app.use(cors());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})