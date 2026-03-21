const jwt = require('jsonwebtoken');
exports.verfiytoken=(req,res,next)=>{
    const oldtoken= req.headers.authorization;//It gets the token sent from the frontend
    if(!token){
        return res.status(401).json({message:"no token"});
    }
    const token=oldtoken.split(" ")[1];
    try{
        const decoded= jwt. verify(token,"secretkey");
        req.user=decoded;
        next();//Moves the request to the next middleware or route handler
    }catch(err){
        return res.status(401).json({message:"invalid token"});     
    }
exports.isAdmin=(req,tes, next)=>{
    if(req.user.role!=="ADMIN"){
        return res.status(403).json({message:"access denied"});
    }
    next();
}

}