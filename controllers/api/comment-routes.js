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

module.exports = router;
