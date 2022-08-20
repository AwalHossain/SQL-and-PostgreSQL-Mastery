const express = require('express');
const mysql = require('mysql');


let app = express();

//Create a connections
const db =   mysql.createConnection({
    host: 'localhost',
    user : "root",
    password: "password",
    port: "3306",
    database: "nodeMysql"
})


//connect to Mysql

db.connect(err=>{
    if(err){
       console.log(err);
    }

    console.log("MySql connected");
})


// Create DB

app.get('/createdb', (req, res)=>{
    let sql = "CREATE DATABASE nodemysql";

    db.query(sql, (err)=>{
        if(err){
            throw err;
        }

        res.send("Database created")
    })
})

//Create table 

app.get("/createemployee", (req, res)=>{
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

    db.query(sql, (err)=>{
        if(err){
            throw err;
        }

        res.send("Employee table created")
    })
})


//insert employee 1

app.get("/employee1", (req, res) => {

    let post = { name: "Jake Smith", designation: "Chief Executive Officer" };
  
    let sql = "INSERT INTO employee SET ?";
  
    let query = db.query(sql, post, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee 1 added");
  
    });
  
  });


  //update employee 
  app.get('/updateemployee/:id', (req, res)=>{
    let newName = 'Upated';

    let sql = `UPDATE employee SET name='${newName}' WHERE id=${req.params.id}`
    console.log(sql);
  db.query(sql, (err,rese)=>{
        if(err){
            throw err;
        }
        console.log(rese,"res");
        res.send("Post updated")
    })
  })

  //Delete the user

  app.get('/delete/:id', (req, res)=>{
    let sql = `DELETE FROM employee WHERE id=${req.params.id}`;

    db.query(sql, (err, result)=>{
        if(err){
            throw err
        };

        console.log(result);
        res.send('Employee delete')
    })
  })


  app.get("/getAll", (req, res)=>{

    db.query("SELECT * FROM employee", (err, result, fileds)=>{
        if(err){
            throw err;
        }

        console.log(result);
        res.send(JSON.stringify(result, null, "  "))
    })
  })



app.listen(3000, ()=>{
    console.log(`This server is running on 3000 port`);
})

