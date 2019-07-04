var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'guitarapp',
  password: 'postgres',
  port: 5432,
})

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.send('users api up')
  })

router.route('/get_users')
  .get((req, res, next) => {
    pool.query('select * from users')
      .then((results) => {
          res.status(200).json(results.rows)
      })
      .catch((e) => {
        console.log(e)
        res.send({ success: false })
      })
  })

router.route('/add_user')
  .post((req, res, next) => {
    const { 
      userid,
      username,
      password
    } = req.body

    pool.query(`insert into users values (${userid}, ${username}, ${password})`)
      .then((results) => {
          res.send({ success: true })
      })
      .catch((e) => {
        console.log(e)
        res.send({ success: false })
      })
  })
<<<<<<< HEAD

=======
>>>>>>> origin/master
module.exports = router;
