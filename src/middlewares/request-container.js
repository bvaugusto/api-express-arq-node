'use strict';
const { asClass } = require('awilix');

module.exports = (req, res, next) => {
  const CalculatorController = require('../controllers/calculator-controller');
  const CalculatorService = require('../services/calculator-service');

  const dependencies = {
    // Controllers
    calculatorController: asClass(CalculatorController).scoped(),
    
    // Services
    calculatorService: asClass(CalculatorService).scoped()
  };

  req.container.register(dependencies);

  return next();
}