import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/PATCH complete trip', () => {
	it('Should complete a trip', done => {
		chai
			.request(app)
			.patch('/api/trips/1/complete')
      .end((err, res) => {
        res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if invoice exists', done => {
		chai
			.request(app)
			.patch('/api/trips/1/complete')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(409);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get invoice after complete a trip', done => {
		chai
			.request(app)
			.get('/api/trips/1/invoice')
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
			.get('/api/trips/1n/invoice')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if trip exists', done => {
		chai
			.request(app)
			.get('/api/trips/99/invoice')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate url param', done => {
		chai
			.request(app)
			.patch('/api/trips/1m/complete')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if trip exists', done => {
		chai
			.request(app)
			.patch('/api/trips/99/complete')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});
});
