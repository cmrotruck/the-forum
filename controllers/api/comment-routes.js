const router = require("express").Router();
const { Comment } = require("../../models");

router.get("/", (req, res) => {
  console.log("<=== Getting all comments ===>");
  Comment.findAll()
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "Unable to retrieve Data!" });
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    }
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res
          .status(404)
          .json({ message: "There was no comment located for this id." });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});



module.exports = router;
