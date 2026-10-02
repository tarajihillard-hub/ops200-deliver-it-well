const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

chai.use(chaiHttp);
const expect = chai.expect;

server.listen(4444);

describe('server/app.js', function() {
  this.timeout(5000);
  beforeEach((done) => {
    
    done();
  });

  afterEach((done) => {
      done();
  })

  it('responds to /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('page says project', (done) => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
      expect(err).not.exist;
      expect(JSON.stringify(res.text)).to.contain('project');
      done();
    });
  });

  it('output should be include a p tag with id of output', (done) => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
      expect(err).not.exist;
      // code goes here check if p tag with id="output" exists 
      expect(res.text).to.include('<p id="output">');     
      done();
    });
  });

  it('output should be include a p tag with correct output', (done) => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
      expect(err).not.exist;
      // code goes here check if p tag with id="output" of 100
      expect(res.text).to.include('<p id="output">100</p>');
      done();
    });
  });


})