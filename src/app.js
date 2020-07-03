const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loggerRequest = require('./middlewares/logger-request');
const { scopePerRequest } = require('awilix-express');
const container = require('./container');
const requestContainer = require('./middlewares/request-container');
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(loggerRequest);
app.use(scopePerRequest(container));
app.use(requestContainer);
app.use('/v1', router);

app.get("/", (req, res) => {
  res.send({});
});

module.exports = app;