require('dotenv').config();
const mysql = require('mysql');

console.log(process.env.DB_USER);
let connection = mysql.createPool({
    connectionLimit:10,
    port:3306,
    host:"sql.freedb.tech",
    user: "freedb_bhuiyan",
    password: "GU4VCu!7jrr$X*k",
    database: "freedb_bhuiya_db"
})


connection.getConnection((err, result)=>{
    if(!err){
        console.log("Db connection successful");
    }else{
       throw (err);
    }

})

module.exports = connection;