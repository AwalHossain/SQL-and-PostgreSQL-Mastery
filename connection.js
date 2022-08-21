require('dotenv').config();
const mysql = require('mysql');

console.log(process.env.DB_USER);
let connection = mysql.createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


connection.connect((err, result)=>{
    if(!err){
        console.log("Db connection successful");
    }else{
        console.log(err);
    }

})

module.exports = connection;