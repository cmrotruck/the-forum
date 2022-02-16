const router = require("express").Router();
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const { Post, User, Comment, Group } = require("../models");

// handlebars set up
router.get('/', (req, res) => {
  Group.findAll()
    .then(dbGroupData => {
      const groups = dbGroupData.map(group => group.get({ plain: true }));

      res.render('homepage', { groups });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });


module.exports = router;
