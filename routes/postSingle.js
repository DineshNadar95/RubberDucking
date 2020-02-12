const express = require("express");
const router = express.Router();
const pData = require('../data/posts.')



router.get("/remove", async (req, res) => {

    try
    {
        let deletePost = await pData.remove(req.session.postSingleID)
        if(deletePost){
            res.redirect('/home')
        }
    
    }catch(e){
        value=true
        let post = await pData.get(req.session.postSingleID);
        res.render('postSingle',{post:post,error:e,value:value})
    }
  })

  router.get("/edit",async(req,res)=>{
      try{
        singlePostData =  await pData.get(req.session.postSingleID)
        res.render('editPost',{singlePostData})

      }catch(e){
        value=true
        let post = await pData.get(req.session.postSingleID);
        res.render('postSingle',{post:post,error:e,value:value})
      }
  })

  module.exports=router