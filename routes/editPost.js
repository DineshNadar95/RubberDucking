const express = require("express");
const router = express.Router();
const pData = require("../data/posts.")


router.post("/", async (req, res) => {
    try{
        let updatePost = await pData.rename(req.session.postSingleID,req.body.title,req.body.content)
        if(updatePost){
            res.redirect('/home')
        }
        
    }
    catch(e)
    {
        singlePostData =  await pData.get(req.session.postSingleID)
        res.render('editPost',{singlePostData,error:e})
    }
});

module.exports = router;