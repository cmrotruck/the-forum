const router = require("express").Router();
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const { Post, User, Comment, Group } = require("../models");

// homepage route
router.get("/", (req, res) => {
  Group.findAll({
    attributes: ["id", "group_image", "group_name"],
  })
    .then((dbGroupData) => {
      const groups = dbGroupData.map((group) => group.get({ plain: true }));

      console.log(groups);
      res.render("homepage", { groups, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// group route
router.get("/groups/:id", async (req, res) => {
  try {
    const dbGroupData = await Group.findByPk(req.params.id, {
      attributes: ["id", "group_image", "group_name"],
      include: [
        {
          model: Post,
          attributes: [
            "id",
            "post_title",
            "post_image",
            "user_id",
            "created_at",
          ],
        },
      ],
    });

    const group = dbGroupData.get({ plain: true });
    console.log(group);
    res.render("single-group", { group });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post route
router.get("/posts/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      attributes: ["id", "post_image", "post_title", "post_text"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render("single-post", { post });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
