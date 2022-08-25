const express = require('express');
const db  = require('../connection');
const router = express.Router();
const mysql = require('mysql')
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const authGuard = require('../services/authGuard');
const checkRole = require('../services/checkRole');

router.post('/signup', async(req,res)=>{
    let {name, contactNumber, status, role, password, email} = req.body;
    console.log("oso");
    const hashedPass = await bcrypt.hash(password, 10);
    let query  = "select email, password, role, status from user where email=?"  
    try{
        db.query(query,[email], (err, result)=>{
            if(!err){
                console.log(result.length);
                if(result.length >0){
                    return res.status(400).json({msg:"Email already exist"})
                }else{
                    query = "insert into user(name, email, contactNumber, password, status, role) values (?,?,?,?,'false','user')";

                    db.query(query, [name, email, contactNumber, hashedPass], (err, result)=>{
                        if(!err){
                            return res.status(201).json({mesg: "Successfully registered"})
                        }else{
                            return res.status(500).json(err)
                        }
                    })
                }
            }else{
                res.status(500).json({msg:err})
            }
        })

    }catch(err){

    }

})


/** LOgin user */

router.post('/login',async(req, res)=>{
    let {email, password} = req.body
        let query = "select email, password, role, status from user where email=?";
        
       
            db.query(query,[email], (err, result)=>{
                console.log();
                let decryp =  bcrypt.compareSync( password,result[0].password)
                console.log(result[0].status, "rs", !decryp);
                if(!err){
                    if(result.length <=0 || !decryp ){
                        return res.status(401).json({msg: "Incorrect username or password"})
                    }else if(result[0].status == "false"){
                        console.log("Odoo");
                        return res.status(401).json({msg: "Wait for the admin approval"})
                    }else if(decryp){
                        console.log("Odoo");
                        const response = {email: result[0].email, role: result[0].role};
                        const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {expiresIn:"12h"})

                      return  res.status(200).json({token: accessToken})
                    }else{
                        return res.status(500).json({msg: "smeting went wrong"})
                    }
                }else{
                    res.status(500).json({msg: err})
                }
            })
       

})



let transporter = nodemailer.createTransport({
        service: 'Yandex',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
})

/** Forget password */

router.post('/forgetpassword', (req, res)=>{
    let user = req.body;
    let query = "select email, password from user where email=?"

    console.log(process.env.EMAIL, process.env.PASS);
    db.query(query,[user.email], (err, result)=>{
        if(!err){
            if(result.length <=0 ){
                res.status(200).json({msg: "your mail is not enlisted"})
            }else{
                let mailOptions = {
                    from: process.env.EMAIL,
                    to: result[0].email,
                    subject: "Password by cafe management",
                    html: `<p>
                        <b>Your login detail are </b> </br>
                        <b> ${result[0].password}</b>
                    </p>`
                }

                transporter.sendMail(mailOptions, (err, info)=>{
                    if(err){
                        res.status(500).json({msg: err})
                    }else{
                       if(info.response){

                           res.status(200).json({msg: "YOur password sent successfully"})
                       }
                    }
                })

               
            }
        }else{
            res.status(500).json({msg: err})
        }
    })
})



/** Get all the user */

router.get('/getAll', authGuard,(req, res)=>{
    
    let query = "select * from user "

    db.query(query, (err, result)=>{
        if(!err){
            if(result.length <=0){
                res.status(200).json({msg: "There are no user in this table"})
            }else if(result.length > 0){
                return res.status(200).json(result)
            }
        }else{
            res.status(500).json(err)
        }
    })
})
router.put('/update', authGuard, checkRole, (req, res)=>{
    let user = req.body;
    let query = "update user set status=? where id=?";

    db.query(query, [user.id, user.status], (err, result)=>{
        console.log(result);
        if(!err){
            if(result.affectedRows == 0){
                res.status(500).json({mag: "User id doesn't exist"})
            }else{
                res.status(200).json({msg: "Updated"}) 
            }
        }else{
            res.status(500).json(err)   
        }
    })
})


//Change password

router.post('/changePassword', authGuard, (req, res)=>{
    const email = res.locals.email;
    const {oldPassword, newPassword} = req.body;
    let query = "select * from user where email=?";

    db.query(query, [email], (err, result)=>{
        if(!err){
            const passCompare =  bcrypt.compareSync(oldPassword, result[0].password)
            console.log(result, passCompare);
            if( !passCompare){
                return res.status(400).json({msg: "Password is incorrect"})
            } else if(passCompare){

                query = "update user set password=? where email=?";
                let encrypt = bcrypt.hashSync(newPassword,10)
                db.query(query, [encrypt, email], (err, result)=>{
                    if(!err){
                        return res.status(200).json({msg: "YOur password has been sucessfully changed"})
                    }else{
                        return res.status(500).json(err)
                    }
                })

            }else{
                return res.status(500).json(err)
            }
        }else{
            return res.status(500).json({msg: "Something went wrong, please try again later"})
        }
    })
})

module.exports = router