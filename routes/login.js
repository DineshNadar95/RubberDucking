const express = require("express");
const router = express.Router();


const userData = require("../data/users");
const pData = require("../data/posts.")

router.post("/", async (req, res) => {
  if (req.session.userID) {
    res.redirect("/home");
  }
  else {
    var userName = req.body.uname;

    var password = req.body.psw;
    try {

      if (await userData.login(userName, password) == false) {
        displayMessage = "login"
        loginMessage = "Invalid Username/Password"
        res.status(401);
        res.render("landing", { displayMessage: displayMessage, loginMessage: loginMessage });
      }
      else {

        let userFound = await userData.getByUserName(userName);
        req.session.userID = userFound._id;
        res.redirect("/home");
      }
    }
    catch (e) {
      displayMessage = "login"
      loginMessage = "Username/Password not provided or no user exist with such a username"
      res.status(401);
      res.render("landing", { displayMessage: displayMessage, loginMessage: loginMessage });
    }
  }
});

router.get("/", async (req, res) => {
  if (req.session.userID) {
    try {
      userId = req.session.userID;
      let user = await userData.get(userId)
      res.redirect("/home");
    }
    catch (e) {
      displayMessage = "login"
      loginMessage = "Username/Password not provided or no user exist with such a username"
      res.status(401);
      res.render("landing", { displayMessage: displayMessage, loginMessage: loginMessage });
    }
  }
  else {
    res.redirect('http://localhost:3001');
  }
});



module.exports = router;
