const express = require("express");
const router = express.Router();



router.get("/", async (req, res) => {
    req.session.destroy(function(err) {
    })
    displayMessage = "logout"
    logoutMessage = "You have been logged out!"
    res.render("landing",{displayMessage:displayMessage,logoutMessage:logoutMessage});
  })

  module.exports=router