const bcrypt = require('bcrypt');
const mysql = require("mysql2");


module.exports = async(req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const salt1 = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt1);

  var sql = mysql.format(
    `INSERT into Users (username, email, password) VALUES (?,?,?)`, [username, email, hashPassword]
  );

  connection.query(sql, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      })
    }
    res.json({
      success: true,
      message: "User has been created.",
    })
  })
}