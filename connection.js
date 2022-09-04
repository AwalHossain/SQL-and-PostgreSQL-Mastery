require('dotenv').config();
const mysql = require('mysql');

console.log(process.env.DB_USER);
let connection = mysql.createPool({
    connectionLimit:10,
    port:3306,
    host:"localhost",
    user: "root",
    password: "password",
    database: "cafenodejs"
})


connection.getConnection((err, result)=>{
    if(!err){
        console.log("Db connection successful");
    }else{
       throw (err);
    }

})

module.exports = connection;