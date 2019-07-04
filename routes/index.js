var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
<<<<<<< HEAD
  res.render('index', { title: 'Welcome to the dev server' })
=======
  res.render('index', { title: 'Express' })
>>>>>>> origin/master
})

module.exports = router;
