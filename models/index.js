// import all models
const Post = require("./forum_post");
const User = require("./forum_user");
const Group = require("./forum_group");
const Comment = require("./forum_comment");

// create associations
module.exports = { User, Post, Group, Comment };
