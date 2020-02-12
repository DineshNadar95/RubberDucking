const express = require("express");
const router = express.Router();
const uData = require("../data/users");
errors = []

router.post("/", async (req, res) => {

    userFound.firstName = req.body.firstName;
    userFound.lastName = req.body.lastName;
    userFound.emailID = req.body.email;
    userFound.superpowers = req.body.superpowers;
    try {
        Updated_User = await uData.updateUser(userFound, req.session.userID);
        
        res.redirect("/profile");
    }
    catch (e) {
        res.status(401);
        
        res.render("editUser",{userFound,error:e})
    }
});


router.get("/", async (req, res) => {
    try {
        if (req.session.userID) {
            let userFound = await uData.get(req.session.userID);
            res.render("editUser", { userFound });
        }
        else {
            displayMessage = "editUser"
            Message = "You're are not logged in"
            res.render("landing", { displayMessage: displayMessage, edituserMessage: Message });
        }
    }
    catch (e) {
        displayMessage = "editUser"
        Message = e
        res.render("landing", { displayMessage: displayMessage, edituserMessage: Message });
    }
});

module.exports = router;