// import all models
const Post = require("./Post");
const User = require("./User");
const Group = require("./Group");
const Comment = require("./Comment");

// create associations
Group.hasMany(Post, {
  foreignKey: "group_id",
});

//export all models
module.exports = { User, Post, Group, Comment };
