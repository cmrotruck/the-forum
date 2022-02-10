const router = require('express').Router();
const { Group } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Group.findAll()
      .then(dbGroupData => res.json(dbGroupData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;