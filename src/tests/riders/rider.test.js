import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET riders', () => {
	it('Should get a list of all riders', done => {
		chai
			.request(app)
			.get('/api/riders')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get a list of all riders', done => {
		chai
			.request(app)
			.get('/api/riders?page=1&limit=1')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should a specific rider', done => {
		chai
			.request(app)
			.get('/api/riders/1')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should closest riders', done => {
		chai
			.request(app)
			.get('/api/riders/1/drivers')
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
			.get('/api/riders/1m')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if a rider exists', done => {
		chai
			.request(app)
			.get('/api/riders/99')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});
