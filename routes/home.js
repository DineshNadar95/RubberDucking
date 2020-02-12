const express = require("express");
const router = express.Router();

const uData = require("../data/users");
const pData = require("../data/posts.")

router.get("/", async (req, res) => {
    ses = req.session.userID;
    if(ses)
    {
        userId = ses
        userFound = await uData.get(userId);
        let postList = await pData.getAll();

        res.render("home", { userFound, posts: postList });
        
    }
    else{
        res.redirect('/')
    }
})
module.exports = router;