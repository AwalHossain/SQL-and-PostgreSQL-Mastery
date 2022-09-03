/**
 * Dependencies
 */
const http = require('http');
const app = require('./app');


const server = http.createServer(app);

app.get("/",(req,res)=>{

    res.status(200).json("Heelo ther beautiful people")
})

server.listen(3000, ()=>{
    console.log(`This server is listenning on 3000`);
})


