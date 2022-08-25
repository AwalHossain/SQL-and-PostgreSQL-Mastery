
const db = require('../connection');
const authGuard = require('../services/authGuard');
const checkRole = require('../services/checkRole');
const router = require('express').Router();

// 
router.post('/add', authGuard, async(req, res)=>{
    let {name} = req.body;
    let query = "insert into category(name) values (?)";

         db.query(query, [name], (err, result)=>{
            if(!err && result.affectedRows >0){
                return res.status(200).json({msg: "Category added"})
            }else{
                return res.status(500).json(err)
            }
         })
    

})


// Get the category
router.get('/get', (req, res)=>{
    let query = "select * from category order by name";

    db.query(query, (err, result)=>{
        if(!err){
            return res.status(200).json(result)
        }else{
            return res.status(500).json(err)
        }
    })
})


module.exports = router;