const User = require('../models').User;

var express = require('express')
var router = express.Router()

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.send('users api up')
  })

router.route('/get_users')
  .get((req, res, next) => {
    User.findAll({
      attributes: ['userid', 'username', 'password']
    })
      .then((results) => {
        console.log(results)
        res.send(results)
      })
      .catch((e) => {
        console.log(e)
        res.send({ success: false })
      })
  })

router.route('/add_user')
  .post((req, res, next) => {
    const {
      username,
      password
    } = req.body

    User.max('userid')
      .success((i) => {
        User.bulkCreate([
          {
            userid: i,
            username,
            password
          }
        ]).then((results) => {
          res.send({ success: true, results })
        })
          .catch((e) => {
            console.log(e)
            res.send({ sucess: false })
          })
      })
      .error((e) => {
        console.log(e)
        res.send({ success: false })
      })
  })

module.exports = router;
