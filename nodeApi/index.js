const cors = require('cors');
const express = require("express");
require('dotenv').config()

const connection = require("./config/db");
const StudentRouter = require("./routes/studentRoutes");

let port = 4200;
const app = express();
app.use(cors())



app.use(express.json())



// DBconnection();

app.use("/api", StudentRouter)



// PORT=process.env.port || 4001;

app.listen(4201, function () {
  console.log(`Example app listening on port ${port}!`);
});








