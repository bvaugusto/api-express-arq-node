class CalculatorController {

  constructor(calculatorService) {
    this.calculatorService = calculatorService;
  }

  async getQuery(req, res) {
    try {
      const result = await this.calculatorService.calculator(req.query);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(422).json(error.message);
    }
  }

  async getParams(req, res) {
    try {
      const result = await this.calculatorService.calculator(req.params);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(422).json(error.message);
    }
  }

  async post(req, res) {
    try {
      const result = await this.calculatorService.calculator(req.body);
      
      return res.status(200).json(result);
    } catch (error) {
      return res.status(422).json(error.message);
    }
  }
}

module.exports = CalculatorController