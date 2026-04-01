const {z} =require('zod') ;
const {PrismaClient}=require('@prisma/client');
const prisma =new PrismaClient();
 const homeownerschema=z.object({
    kebleID:z.string().min(3,"Please enter a valid kebleID"),
     firstName: z.string().min(3,"Please enter first name"),
    lastName: z.string().min(3,"Please enter last name"),
  dateOfBirth: z.string(),
  gender: z.string(),
  address: z.string(),
  phoneNumber: z.string().min(10),
  familyInfo: z.string().optional(),
  
})
module.exports = { homeownerschema };
 const createHomeowner=async(req,res)=>{
    try{ 
        const validatedData=homeownerschema.parse(req.body);
        
        const homeowner =await prisma.homeowner.create({
            data:{
                ...validatedData,
                eligbilityCheck:true,
            }
        });
        res.status(201).json(homeowner);
    }
    catch(error){
         res.status(400).json({error:error.errors});
    }
module.exports={createHomeowner}
}