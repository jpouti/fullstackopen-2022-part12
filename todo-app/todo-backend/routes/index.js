const express = require('express');
const router = express.Router();

const configs = require('../util/config')

const redis = require('../redis')

let visits = 0

// initialize redis added todos counter
const initializeRedis = async() => {
  const val = await redis.getAsync('added_todos')
  if (!val) {
    await redis.setAsync('added_todos', 0)
  }
}
initializeRedis()

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

// GET statistics data
router.get('/statistics', async (req, res) => {
  const val = parseInt(await redis.getAsync('added_todos'))
  res.json({
    "added_todos": val
  })
})

module.exports = router;
