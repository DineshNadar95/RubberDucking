const express = require("express");
const router = express.Router();
const uData = require("../data/users");


router.get("/", async (req, res) => {
    userId = req.session.userID;
    let userFound = await uData.get(userId);
    res.render('profile',{userFound});
})
module.exports = router;