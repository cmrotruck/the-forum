const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Group } = require("../models");

// handlebars set up
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

module.exports = router;
