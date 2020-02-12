const express = require("express");
const router = express.Router();
const uData = require('../data/users')



router.post("/", async (req, res) => {
    let personName = req.body.sd;
    value = true

    try{
        result = await uData.getUserByName(personName)
        if(result){
            value=true
        }else{
            value=false
        }
        res.render("searchresult", { result: result,  personName:personName ,value:value})

    }catch(e){

        value=false
        res.render("searchresult", { result: result,  personName:personName ,value:value})

    }
  })

  module.exports=router