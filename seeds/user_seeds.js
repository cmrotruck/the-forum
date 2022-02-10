const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    first_name: "Chad",
    last_name: "Rotruck",
    username: "crotruck",
    email: "crotruck@gmail.com",
    password: "Password1234",
  },
  {
    first_name: "Debbie",
    last_name: "Hall",
    username: "dhall",
    email: "dhall@gmail.com",
    password: "Password4321",
  },
  {
    first_name: "Logan",
    last_name: "Davis",
    username: "ldavis",
    email: "ldavis@gmail.com",
    password: "Password5678",
  },
];

const seedGroups = () => User.bulkCreate(userData);

<<<<<<< HEAD
module.exports = seedGroups;
=======
module.exports = seedGroups;
>>>>>>> d540c6451da665880ea7d5334859e5c6842b1f78
