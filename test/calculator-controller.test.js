const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = chai.should();
chai.use(chaiHttp);


describe('CalculatorController', () => {
  describe('getQuery', () => {
    it('should addition 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=addition&param1=10&param2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(12);
        });
    });

    it('should subtraction 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=subtraction&param1=10&param2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(8);
        });
    });

    it('should multiplication 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=multiplication&param1=10&param2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(20);
        });
    });

    it('should division 200', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=division&param1=10&param2=2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(5);
        });
    });

    it('should division 422', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=division&param1=10&param2=0')
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('Valor invalido para o divisor');
        });
    });

    it('should validate params 422', async () => {
      chai.request(server)
        .get('/v1/calculator?operator=division&param1=asdf&param2=asdf')
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('É permitido somente valor numérico!');
        });
    });
  });

  describe('getParams', () => {
    it('should addition 200', async () => {
      chai.request(server)
        .get('/v1/calculator/addition/10/2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(12);
        });
    });

    it('should subtraction 200', async () => {
      chai.request(server)
        .get('/v1/calculator/subtraction/10/2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(8);
        });
    });

    it('should multiplication 200', async () => {
      chai.request(server)
        .get('/v1/calculator/multiplication/10/2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(20);
        });
    });

    it('should division 200', async () => {
      chai.request(server)
        .get('/v1/calculator/division/10/2')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(5);
        });
    });

    it('should division 422', async () => {
      chai.request(server)
        .get('/v1/calculator/division/10/0')
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('Valor invalido para o divisor');
        });
    });

    it('should validate params 422', async () => {
      chai.request(server)
        .get('/v1/calculator/division/asdf/asdf')
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('É permitido somente valor numérico!');
        });
    });
  });

  describe('post', () => {
    it('should addition 200', async () => {
      chai.request(server)
        .post('/v1/calculator')
        .send({ operator: 'addition', param1: 10, param2: 2 })
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(12);
        });
    });

    it('should subtraction 200', async () => {
      chai.request(server)
        .post('/v1/calculator')
        .send({ operator: 'subtraction', param1: 10, param2: 2 })
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(8);
        });
    });

    it('should multiplication 200', async () => {
      chai.request(server)
        .post('/v1/calculator')
        .send({ operator: 'multiplication', param1: 10, param2: 2 })
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(20);
        });
    });

    it('should division 200', async () => {
      chai.request(server)
        .post('/v1/calculator')
        .send({ operator: 'division', param1: 10, param2: 2 })
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.body.should.be.eql(5);
        });
    });

    it('should division 422', async () => {
      chai.request(server)
        .post('/v1/calculator')
        .send({ operator: 'division', param1: 10, param2: 0 })
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('Valor invalido para o divisor');
        });
    });

    it('should validate params 422', async () => {
      chai.request(server)
        .post('/v1/calculator')
        .send({ operator: 'division', param1: 'asdf', param2: 'asdf' })
        .end((err, res) => {
          res.statusCode.should.eql(422);
          res.body.should.be.eql('É permitido somente valor numérico!');
        });
    });
  });
})