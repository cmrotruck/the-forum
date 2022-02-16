const { Group } = require("../models");

const groupData = [
  {
    group_name: "Sports",
    group_image: "/images/sports.jpg",
  },
  {
    group_name: "Movies",
    group_image: "/images/movies.jpg",
  },
  {
    group_name: "Gardening",
    group_image: "/images/gardening.jpg",
  },
  {
    group_name: "For Sale/Trade",
    group_image: "/images/sale.jpg",
  },
];

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;
