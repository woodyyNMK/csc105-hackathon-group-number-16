const mysql=require('mysql2');
const bcrypt=require('bcrypt');
var jwt = require("jsonwebtoken");

module.exports=(req,res)=>{
    const usernameOrEmail=req.body.usernameOrEmail;
    const password=req.body.password;

    var sql = mysql.format("SELECT * FROM Users WHERE username = ? or email = ?", [usernameOrEmail,usernameOrEmail]);

    connection.query(sql,(err,rows)=>{
        if(err){
            return res.json({
				success: false,
				data: null,
				error: err.message,
			});
        }
        numRows=rows.length;
        if(numRows==0){
            res.json({
				success: false,
				message: "Username or email is wrong.",
			});
        }
        else{
            const valid = bcrypt.compare(password, rows[0].password);

            if(valid){
                const token = jwt.sign(
					{
						userId: rows[0].id,
					},
					"ZJGX1QL7ri6BGJWj3t",
					{ expiresIn: "1h" }
				);
                // console.log(token);
                res.cookie("user", token);
                res.json({
                success: true,
                message: "Login credential is correct",
                user: {
                    email: rows[0].email,
                    id: rows[0].id,
                    username: rows[0].username
                }
            });
            }
            else{
                res.json({
					success: true,
					message: "Incorrect password.",
				});
            }
            
        }
    })
}