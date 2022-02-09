const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup Handlebars.js as default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on routes

app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});