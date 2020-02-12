const express = require("express");

const app = express();
const static = express.static(__dirname + "/public");
const bodyParser = require("body-parser");
const session = require('express-session')
const bcrypt = require('bcryptjs');
const exphbs = require("express-handlebars");

const configRoutes = require("./routes");


app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  name: 'AuthCookie',
  secret: 'somesecretstring!',
  resave: false,
  saveUninitialized: false,
}))


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});