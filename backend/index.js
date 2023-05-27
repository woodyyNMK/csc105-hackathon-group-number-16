const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require('cors');


const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: "3306",
  user: "group16",
  password: "229250255",
  database: "group16"
})

global.connection = connection;

app.use(express.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());
// app.use(cors({
//   origin: ['],
//   credentials: true,
// }))

console.log("Database is connected");
app.post('/register', require('./routes/register'));
app.post("/login", require("./routes/login"));



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})



