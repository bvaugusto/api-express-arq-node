const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.send({});
});

router.get('/calculator', async(req, res) => {
  return await req.container.resolve('calculatorController').getQuery(req, res);
});

router.get('/calculator/:operator/:var1/:var2', async(req, res) => {
  return await req.container.resolve('calculatorController').getParams(req, res);
});

router.post('/calculator', async(req, res) => {
  return await req.container.resolve('calculatorController').post(req, res);
});

module.exports = router;