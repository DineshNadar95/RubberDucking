const editUserRoute = require('./editUser')
const Loginroutes = require('./login')
const ProfileRoutes = require('./profile.js')
const homeRoutes = require('./home.js')
const questionRoutes = require('./questions')
const signupRoutes = require('./signup')
const logoutRoutes = require('./logout')
const postRoutes = require('./post')
const postSingleRoutes = require('./postSingle')
const editPostRoutes = require('./editPost')
const searchresultRoutes = require('./searchresult')
const other_profileRoutes = require('./other_profile')

const constructorMethod = app => {

  app.use("/editUser",editUserRoute)
  
  app.use("/login",Loginroutes)
  app.use("/home",homeRoutes)
  app.use("/profile",ProfileRoutes)
  app.use("/quiz", questionRoutes)
  app.use("/signup",signupRoutes)
  app.use("/logout",logoutRoutes)
  app.use("/post",postRoutes)
  app.use("/postSingle",postSingleRoutes)
  app.use("/editPost",editPostRoutes)
  app.use("/searchresult",searchresultRoutes)
  app.use("/other_profile",other_profileRoutes)
  
  app.use("*", (req, res) => {
      res.render("landing")
  });

};
module.exports = constructorMethod;