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
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255),address VARCHAR(255), PRIMARY KEY(id))";

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
  
    let sql = "INSERT INTO employee(name, address, designation) VALUES ('De more', 'France', 'Higway 45')";
  
    let query = db.query(sql, post, (err, result) => {
  
      if (err) {
  
        throw err;
  
      }
      console.log(result);
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


  /** Get all the user altogether */

  app.get("/getAll", (req, res)=>{

    db.query("SELECT * FROM employee", (err, result, fileds)=>{
        if(err){
            throw err;
        }

        console.log(result);
        res.send(JSON.stringify(result, null, "  "))
    })
  })


  // Filter records from a table 

  app.get("/filter", (req, res)=>{

    // wildcard characters
    /** '%' wildcard to represent zero, one or multiple */

    const query = "SELECT * FROM employee WHERE name LIKE 'A%'"

    // filter for getting specific
    // "SELECT * FROM employee WHERE address='france'"
    db.query(query, (err, result, fileds)=>{
        if(err){
            throw err;
        }

        console.log(result, "file");
        res.send(JSON.stringify(result, null, "  "))
    })
  })


  /** Escaping query values to prevetn sql injections */

  app.get("/filter1", (req, res)=>{

    // escape query values by using the place holder ? method
    const name = "Jake Smith";
    const query = "SELECT * FROM employee WHERE name= ?"

    

    db.query(query, [name], (err, result, fileds)=>{
        if(err){
            throw err;
        }

        console.log(result, "file");
        res.send(JSON.stringify(result, null, "  "))
    })
  })


  /** Filtering data with multiple vlues */

  app.get("/filter2", (req, res)=>{

    // escape query values by using the place holder ? method
    const name = "Jake Smith";
    const adr = "USa";
    const query = "SELECT * FROM employee WHERE name= ? OR address= ?"

    

    db.query(query, [name, adr], (err, result, fileds)=>{
        if(err){
            throw err;
        }

        console.log(result, "file");
        res.send(JSON.stringify(result, null, "  "))
    })
  })


app.listen(3000, ()=>{
    console.log(`This server is running on 3000 port`);
})

