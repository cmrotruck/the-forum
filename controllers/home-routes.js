const router = require("express").Router();
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const { Post, User, Comment, Group } = require("../models");

// handlebars set up
<<<<<<< HEAD
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

=======
router.get("/", (req, res) => {
  Group.findAll({
    attributes: ["id", "group_image", "group_name"],
  })
    .then((dbGroupData) => {
      const groups = dbGroupData.map((group) => group.get({ plain: true }));

      console.log(groups);
      res.render("homepage", { groups });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
>>>>>>> 0301aa1a17824ce442c4b678cebf5021ea59c54e

module.exports = router;
