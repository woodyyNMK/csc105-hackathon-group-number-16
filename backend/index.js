const cors=require('cors');
const express=require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const connection=mysql.createConnection({
  host: "db.cshack.site",
  port: "3306",
  user: "group16",
  password: "229250255",
  database: "group16"
});
global.connection=connection;

connection.connect();
const port=3000;
const app=express();
app.use(express.json());
app.use(bodyParser.json({type:"application/json"}));
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'],
    credentials: true,
  }));
app.use(cookieParser());
app.post("/register", require('./routes/register'));
app.post("/login", require("./routes/login"));



app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});                                              

