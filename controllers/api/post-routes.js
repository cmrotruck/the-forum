const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Group } = require("../../models");

router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get(":id", (req, res) => {
  Comment.findAll({
    where: {
      post_id: req.params.id,
    }
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res
          .status(404)
          .json({ message: "There was no post located for this id." });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  console.log(req);
  Post.create({
    post_title: req.body.post_title,
    post_text: req.body.post_text,
    user_id: req.body.user_id,
    group_id: req.body.group_id,
    post_image: req.body.post_image
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


// Not used, as we are using modals rather than handlebars templates?
// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
