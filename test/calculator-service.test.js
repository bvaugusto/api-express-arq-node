const assert = require('assert');
const CalculatorService = require('../src/services/calculator-service');
const CalculatorError = require('../src/errors/calculator-error');

describe('calculatorService', () => {
  let calculatorService, params;

  beforeEach(() => {
    calculatorService = new CalculatorService();
  });

  describe('calculator', () => {
    it('should addition success', async () => {
      params = { operator: 'addition', param1: 10, param2: 2 };
      
      assert.equal(await calculatorService.calculator(params), 12);
    });

    it('should subtraction success', async () => {
      params = { operator: 'subtraction', param1: 10, param2: 2 };
      
      assert.equal(await calculatorService.calculator(params), 8);
    });

    it('should multiplication success', async () => {
      params = { operator: 'multiplication', param1: 10, param2: 2 };
      
      assert.equal(await calculatorService.calculator(params), 20);
    });

    it('should division success', async () => {
      params = { operator: 'division', param1: 10, param2: 2 };
      
      assert.equal(await calculatorService.calculator(params), 5);
    });

    it('should division error', async () => {
      params = { operator: 'division', param1: 10, param2: 0 };
      
      assert.rejects(async() => await calculatorService.calculator(params), Error, "Valor invalido para o divisor");
    });
    
    it('should operator not found', async () => {
      const error = new CalculatorError("Operador inválido!");
      params = { operator: 'div', param1: 10, param2: 0 };
      
      assert.rejects(async() => await calculatorService.calculator(params), error, "Operador inválido!");
    });
  })
})