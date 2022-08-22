

require('dotenv').config();
const jwt = require('jsonwebtoken')


function authGuard( req,res, next){
    const  {authorization} = req.headers;

    const token = authorization.split(" ")[1];

    const response = jwt.verify(token, process.env.ACCESS_TOKEN, (err, response)=>{
        if(!err){
            console.log(response);
            res.locals = response
            next();
        }else{
            return res.status(403).json({msg: "YOur jwt token is invalid"})
        }
    } );

}


module.exports = authGuard;