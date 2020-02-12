const express = require("express");
const router = express.Router();
const uData = require("../data/users");

router.post("/", async (req, res) => {

  var data = {}
  let displayMessage = false
  data.firstName = req.body.firstName;
  data.lastName = req.body.lastName;

  data.password = req.body.password
  data.email = req.body.email;
  data.userName = req.body.username;
  data.score = req.body.score;
  data.superpowers = req.body.superpowers;
  data.avatar = req.body.test;

  try{
    const userCreated = await uData.create(data.firstName, data.lastName, data.email, data.userName, data.password, data.score,data.avatar,data.superpowers);
    displayMessage = "signup"
    Message = "User is created successfully"
    res.render("landing", { signupMessage: Message, displayMessage: displayMessage })
  } catch(e) 
  {
    displayMessage = "signup"
    Message = "User is not created Beacause "+e
    res.render("landing", { signupMessage: Message, displayMessage: displayMessage })
  }
});

module.exports = router;
