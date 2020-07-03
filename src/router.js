const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../src/resources/docs/swagger.json');

router.use('/docs', swaggerUi.serveWithOptions({ redirect: false }));
router.get('/docs', swaggerUi.setup(swaggerDocument));

router.get('/', (req, res) => {
  return res.send({});
});

router.get('/calculator', async(req, res) => {
  return await req.container.resolve('calculatorController').getQuery(req, res);
});

router.get('/calculator/:operator/:param1/:param2', async(req, res) => {
  return await req.container.resolve('calculatorController').getParams(req, res);
});

router.post('/calculator', async(req, res) => {
  return await req.container.resolve('calculatorController').post(req, res);
});

module.exports = router;