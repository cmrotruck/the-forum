// import all models
const Post = require("./Post");
const User = require("./User");
const Group = require("./Group");
const Comment = require("./Comment");

// create associations

//group associations
Group.hasMany(Post, {
  foreignKey: "group_id",
});

//post associations
Post.belongsTo(Group, {
  foreignKey: "group_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

//comment associations
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

//user associations
User.hasMany(Comment, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

//export all models
module.exports = { User, Post, Group, Comment };
