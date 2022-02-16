const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "This is a comment test.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is a comment test 2.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "This is a comment test 3.",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "This is a comment test 4.",
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: "This is a comment test 6.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "This is a comment test 7.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "This is a comment test 8.",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "This is a comment test 9.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "This is a comment test 10.",
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
