const express = require("express");
const router = express.Router();
const userData = require("../data/users");
const pData = require("../data/posts.")

router.get('/', async (req, res) => {
  var userposts = []
  if (req.session.userID) {
    try {
      userId = req.session.userID;

      let postList = await pData.getAll();

      for (i = 0; i < postList.length; i++) {

        if (postList[i].author.posterID == userId) {

          userposts.push(postList[i]);
        }

      }


      res.render("post", { posts: userposts });
    }
    catch (e) {
      value = true
      res.render("post", { value: value, error: e })
    }
  }
  else {
    res.redirect('http://localhost:3000');
  }
})

router.get('/:id', async (req, res) => {
  try {
    let post = await pData.get(req.params.id);
    req.session.postSingleID = (req.params.id)
    res.render('postSingle', { post })
  } catch (e) {
    value = true
    res.render("post", { value: value, error: e })
  }


})

router.post('/add', async (req, res) => {


  try {
    let post = await pData.create(req.session.userID, req.body.pTitle, req.body.pContent)

    if (post) {
      res.redirect("/home")
    }
  } catch (e) {
    value = true
    res.render("post", { value: value, error: e })
  }

})

module.exports = router;