const express= require("express")
const router= express.Router()
const menuItem = require("../model/menu")

router.get("/", (req, res) => {
   res.send(" hello wellcome to my hotel")
})
router.post("/menu", async (req, res) => {
    try {
       const data = req.body
       console.log(data);
       const newmenu = new menuItem(data)
       const response = await newmenu.save()
       console.log("data saved");
       res.status(200).json(response)
    }
    catch (err) {
       console.log(err);
       res.status(500).json({ error: "internal server error" })
    }
 
 })
 router.get("/menu/sweet", async (req, res) => {
    try {
       const data = await menuItem.find()
       console.log("data feteched");
       res.status(500).json(data)
    }
    catch (err) {
       console.log(err);
       res.status(500).json({ error: "internal server error" })
    }
 
 })

 router.put("/menu/:id", async(req,res)=>{
   try{
      const person_id= req.params.id
      const updatedData= req.body
      const response=  await menuItem.findByIdAndUpdate(person_id,updatedData,{new: true, runValidators:true})
      res.status(200).json(response)
      if(!response){
         res.status(404).json({error:"user not found"})
      }
   }
   catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"})
   }
 })
 

router.delete("/delete/:id", async (req,res)=>{
   try{
    const delete_id = req.params.id
    const response= await menuItem.findByIdAndDelete(delete_id)
    res.status(200).json(response)
    if(!response){
       res.status(404).json({error:"user not found"})
    }
   }
   catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"})
   }
   
})

module.exports= router