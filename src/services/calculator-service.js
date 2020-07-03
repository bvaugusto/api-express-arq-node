const arqCalculator = require('arq-calculator');
const CalculatorError = require('../errors/calculator-error')

class calculatorService {

  async calculator(params) {
    const { operator } = params;
    let { var1, var2 } = params;
    
    var1 = parseInt(var1, 10);
    var2 = parseInt(var2, 10);

    switch (operator) {
      case 'addition':
        return arqCalculator.addition(var1, var2);  
      case 'subtraction':
        return arqCalculator.subtraction(var1, var2);  
      case 'multiplication':
        return arqCalculator.multiplication(var1, var2);  
      case 'division':
        return arqCalculator.division(var1, var2);  
      default:
        throw new CalculatorError('Operador inválido!');
    }
  }
}

module.exports = calculatorService;