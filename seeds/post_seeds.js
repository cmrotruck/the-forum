const { Post } = require("../models");

const postData = [
  {
    post_text: "This is a test.",
    user_id: 1,
    group_id: 1,
  },
  {
    post_text: "This is a test 2.",
    user_id: 1,
    group_id: 2,
  },
  {
    post_text: "This is a test 3.",
    user_id: 1,
    group_id: 3,
  },
  {
    post_text: "This is a test 4.",
    user_id: 1,
    group_id: 4,
  },
  {
    post_text: "This is a test 6.",
    user_id: 2,
    group_id: 2,
  },
  {
    post_text: "This is a test 7.",
    user_id: 3,
    group_id: 1,
  },
  {
    post_text: "This is a test 8.",
    user_id: 2,
    group_id: 4,
  },
  {
    post_text: "This is a test 9.",
    user_id: 2,
    group_id: 3,
  },
  {
    post_text: "This is a test 10.",
    user_id: 3,
    group_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;