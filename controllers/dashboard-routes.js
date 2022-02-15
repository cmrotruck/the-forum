const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Group } = require("../models");

// handlebars set up
router.get('/', (req, res) => {
  res.render('dashboard');
});

module.exports = router;