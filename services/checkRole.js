


function checkRole(req, res, next){
    console.log(res.locals);
    if(res.locals.role === 'user'){
        res.status(401).json({msg: "YOur are not authorized to do this task"});
    }else{
        next();
    }

}

module.exports = checkRole;