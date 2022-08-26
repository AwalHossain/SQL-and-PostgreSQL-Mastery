const router = require('express').Router();
const db = require('../connection');
const authGuard = require('../services/authGuard');
const checkRole = require('../services/checkRole');

/** Add product details */
router.post("/add", authGuard, checkRole, (req, res) => {
    let { name, categoryId, description, price, status } = req.body;
    let query = "insert into product (name, categoryId, description, price, status) values (?,?,?,?,'true')";

    db.query(query, [name, categoryId, description, price], (err, result) => {
        if (!err) {
            console.log(result);
            return res.status(200).json({ msg: "Product Added successfully" })
        } else {
            return res.status(500).json(err)
        }
    })
})


/** Get product with catefory name */
router.get('/get', authGuard, (req, res) => {
    // query to get product from db
    let query = "select p.id, p.name, p.description, p.price, p.price, c.id as categoryId, c.name as categoryName from product as p INNER JOIN category as c where p.categoryId = c.id";

    db.query(query, (err, result) => {
        if (!err) {
            return res.status(200).json(result)
        } else {
            return res.status(500).json(err);
        }
    })
})



/** Get by category */

router.get("/categoryId/:id", authGuard,(req, res)=>{
    const id = req.params.id
    let query = "select id, name from productg where categoryId=? and status='true'";

    db.query(query, [id], (err, result)=>{
        if(!err){
            return res.status(200).json(result);
        }else{
            return res.status(500).json(err);
        }
    })
})


/** Update the product status */

router.put('/updateStatus', authGuard, checkRole, (req, res)=>{
    const {name, categoryId, description, price, id} = req.body;
    query = "update product set name=?, categoryId=?, description=?, price=? where id=?";

    db.query(query, [name, categoryId, description, price, id], (err, result)=>{
        if(!err){
            if(!result.affectedRows === 0){
                return res.status(400).json({msg:"Your product id is incorrect"});
            }

            return res.status(200).json({msg:"Your code updated sucessfully"});
        }else{
            return res.status(500).json(err);
        }
    })
})


/** Update Product Status */
router.put('/updateStatus', authGuard, (err, result)=>{
        let {status, id} = req.body;
        let query = "update product set status=? where id=?"

        db.query(query, [status, id], (err, result)=>{
            if(!err){
                if(result.affectedRows === 0){
                    return res.status(500).json({msg:"Product id is inccorect"});
                }
                return res.status(500).json({msg: "Product status updated successfully"});
            }else{
                return res.status(500).json(err);
            }
        })
})



/** Delete Product */

router.delete('/delete/:id', authGuard, (err, result)=>{
    const id = req.params.id;

    let query = "delete from product where id=?";

    db.query(query, [id],authGuard, (err, result)=>{

        if(!err){
            if(result.affectedRows === 0){
                return res.status(404).json({msg: "Product id doesn't found"});
            }
            return res.status(200).json({msg:"your product has been successfully deleted"});
        }else{
            return res.status(500).json(err);
        }
    })
})





module.exports = router;