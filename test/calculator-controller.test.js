const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = chai.should();
chai.use(chaiHttp);


describe('CalculatorController', () => {
  describe('getQuery', () => {
    it('should addition 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=addition&var1=10&var2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(12);
        });
    });

    it('should subtraction 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=subtraction&var1=10&var2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(8);
        });
    });

    it('should multiplication 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=multiplication&var1=10&var2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(20);
        });
    });

    it('should division 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=division&var1=10&var2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(5);
        });
    });

    it('should division 422', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=division&var1=10&var2=0')
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('Valor invalido para o divisor');
        });
    });
  })
})