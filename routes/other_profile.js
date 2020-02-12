const express = require("express");
const router = express.Router();
const uData = require("../data/users");

router.get('/:id', async (req, res) => {
    try {
        let userFound = await uData.get(req.params.id);
        res.render('other_profile', { userFound })
    } catch (e) {
        value = true
        res.render("other_profile", { value: value, error: e })
    }


})

module.exports = router