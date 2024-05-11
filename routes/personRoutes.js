const express= require("express")
const router= express.Router()
const person = require("../model/person")


 router.post("/person", async (req, res) => {
    try {
       const data = req.body
       console.log(data);
       const newperson = new person(data)
       const response = await newperson.save()
       console.log("data saved");
       res.status(200).json(response)
    }
    catch (err) {
       console.log(err);
       res.status(500).json({ error: "internal server error" })
    }
 
 })

 router.get("/persons/:work",async(req,res)=>{
    try{
       const worktype= req.params.work
       console.log("worktype",worktype);
       if(worktype === "chef" || worktype ==="waiter" || worktype === "manager"){
          const response=  await person.find({work:worktype})
          res.status(200).json(response)
       }
       else{
          res.status(404).json({error:'invalid work type'})
       }
    }
    catch (err) {
       console.log(err);
       res.status(500).json({ error: "internal server error" })
    }  
 
 })

 router.put("/:id", async(req,res)=>{
   try{
      const person_id= req.params.id
      const updatedData= req.body
      const response=  await person.findByIdAndUpdate(person_id,updatedData,{new: true, runValidators:true})
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

 router.delete("/:id", async(req,res)=>{
   try{
      const person_id= req.params.id
      const response=  await person.findByIdAndDelete(person_id)
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