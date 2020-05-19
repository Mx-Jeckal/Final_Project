const passport = require('passport')
const router = require("express").Router();
const isAuthenticated = require("../../config/isAuthenticated")
const quotesController = require("../../controllers/quoteController.js");

// Matches with "/api/books"
router.route("/quotes")
  .get(quotesController.findAll)
  .post(quotesController.create)

router.route("/quotes/:id")
  .get(quotesController.findById)
  .delete(quotesController.delete);

router.get('/admin',
 isAuthenticated, 
 (req, res) => {

    res.json({ status: 'ok' })
  })

router.post('/login',
  passport.authenticate('local',
  { failureRedirect: '/login' }),
  function (req, res) {
    console.log('bonjour', req)
    res.json(req.user);
  });

  // Route for logging user out
  router.get('/logout', function (req, res) {
    console.log(req)
    req.logout()
    res.redirect('/')
  })
module.exports = router