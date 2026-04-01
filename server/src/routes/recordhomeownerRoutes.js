const express=require("express");
const {createHomeowner}=require("../controllers/recordhomeowner");
const router=express.Router();
router.post("/recordhomeowner",createHomeowner);
module.exports=  router;