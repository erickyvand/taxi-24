import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET specific driver', () => {
	it('Should get specific driver', done => {
		chai
			.request(app)
			.get('/api/drivers/1')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
  });
  
  it('Should validate url param', done => {
		chai
			.request(app)
			.get('/api/drivers/1n')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
  });
  
  it('Should check if driver exist', done => {
		chai
			.request(app)
			.get('/api/drivers/99')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});
