const arqCalculator = require('arq-calculator');
const CalculatorError = require('../errors/calculator-error');
const ValidateParamsError = require('../errors/validate-params-error');

class calculatorService {

  async calculator(params) {
    const { operator } = params;
    let { param1, param2 } = params;
    
    param1 = parseInt(param1, 10);
    param2 = parseInt(param2, 10);

    if (isNaN(param1) || isNaN(param2)) {
      throw new ValidateParamsError("É permitido somente valor numérico!");
    }

    switch (operator) {
      case 'addition':
        return arqCalculator.addition(param1, param2);  
      case 'subtraction':
        return arqCalculator.subtraction(param1, param2);  
      case 'multiplication':
        return arqCalculator.multiplication(param1, param2);  
      case 'division':
        return arqCalculator.division(param1, param2);  
      default:
        throw new CalculatorError('Operador inválido!');
    }
  }
}

module.exports = calculatorService;