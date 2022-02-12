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

  router.get('/:id', (req, res) => {
    Group.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then((dbGroupData) => {
        if (!dbGroupData) {
          res
            .status(404)
            .json({ message: "There was no group located for this id." });
          return;
        }
        res.json(dbGroupData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    Group.create({
      group_name: req.body.group_name,
    })
      .then(dbGroupData => res.json(dbGroupData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

module.exports = router;