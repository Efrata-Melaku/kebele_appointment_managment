const {PrismaClient }= require('@prisma/client');
const prisma =new PrismaClient();
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');

//register user
exports.register=async(req , res)=>{

}


//login admin
exports.login=async(req,res)=>{
    const{email, password}=request.body;
    const user=await prisma.user.findUnique({
        where:{email:email}
    });
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const isPasswordMatch=await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return res.status(400).json({message:"invalid password"});

    }
    const token = jwt.sign(
    { id: user.id, role: user.role },
    "secretkey",
    { expiresIn: "1d" }
  );

  res.json({ token, role: user.role });
}