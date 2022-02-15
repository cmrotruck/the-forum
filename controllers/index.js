const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require('./dashboard-routes.js');

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
