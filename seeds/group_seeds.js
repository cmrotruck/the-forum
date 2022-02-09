const { Group } = require("../models");

const groupData = [
  {
    group_name: "Sports",
  },
  {
    group_name: "Movies",
  },
  {
    group_name: "Gardening",
  },
  {
    group_name: "For Sale/Trade",
  },
];

const seedGroups = () => Group.bulkCreate(groupData);

module.exports = seedGroups;