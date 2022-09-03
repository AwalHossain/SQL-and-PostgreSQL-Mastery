require('dotenv').config();
const mysql = require('mysql');

console.log(process.env.DB_USER);
let connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user: "bhuiyan",
    password: "3zS,Z-@cly2f",
    database: "bhuiyantrad_bhuiyanproject"
})


connection.connect((err, result)=>{
    if(!err){
        console.log("Db connection successful");
    }else{
        console.log(err);
    }

})

module.exports = connection;