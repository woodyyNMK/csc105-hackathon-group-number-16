const mysql=require('mysql2');
var jwt = require("jsonwebtoken");
module.exports=(req,res)=>{
    const menu_id=req.body.menu_id;
    const menu_name=req.body.menu_name;
    const menu_price=req.body.menu_price;
    const menu_image=req.body.image2;   

    const token = req.headers.authorization.split(' ')[1];
	// const token = req.cookies.user;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");


    var sql=mysql.format(
        `Insert into Cart_menus (user_id,menu_id,menu_name,menu_price,menu_image) values (?,?,?,?,?)`, [decoded.userId,menu_id,menu_name,menu_price,menu_image]
    );

    connection.query(sql,(err,rows)=>{
        if(err){
            return res.json({
                success: false,
                data:null,
                error:err.message,
            });
        }
        res.send({
            success:true,
            message:'Item has been created',
        });
    });
   
};