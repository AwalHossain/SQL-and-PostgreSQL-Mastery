/**
 * Dependencies
 */
const http = require('http');
const app = require('./app');
const connection = require('./connection');

const server = http.createServer(app);

app.get("/",(req,res)=>{


    res.send(connection.config.connectionConfig.password)
    // res.status(200).json("Heelo ther beautiful people",)
})

//    const lb = connection 
console.log(connection);

server.listen(3000, ()=>{
    console.log(`This server is listenning on 3000`);
})


