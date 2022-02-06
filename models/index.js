// import all models
const Post = require("./forum_posts");
const User = require("./forum_users");
const Group = require("./forum_groups");
const Comment = require("./forum_comments");

// create associations

//export all models
module.exports = { User, Post, Group, Comment };
