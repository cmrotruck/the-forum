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
      res.render("homepage", { groups, loggedIn: req.session.id });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/groups/:id", (req, res) => {
//   Post.findAll({
//     where: {
//       Group_id: req.params.id,
//     },
//     attributes: ["id", "post_title", "post_text", "user_id", "post_image"],
//   }).then((dbPostsData) => {
//     //serialize the data
//     const posts = dbPostsData.map((post) => post.get({ plain: true }));
//     res.render("single-group", { posts });
//   });
// });

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

module.exports = router;
