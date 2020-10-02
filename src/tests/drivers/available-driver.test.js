import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET available drivers', () => {
	it('Should get all available drivers', done => {
		chai
			.request(app)
			.get('/api/drivers/available')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get all available drivers', done => {
		chai
			.request(app)
			.get('/api/drivers/available?page=1&limit=1')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get all available drivers within 3 km', done => {
		chai
			.request(app)
			.get('/api/drivers/1/available')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get all available drivers within 3 km', done => {
		chai
			.request(app)
			.get('/api/drivers/1/available?page=1&limit=1')
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
			.get('/api/drivers/1m/available')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if location exists', done => {
		chai
			.request(app)
			.get('/api/drivers/99/available')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});
