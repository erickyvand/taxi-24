import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET active trips', () => {
	it('Should get a list of all active trips', done => {
		chai
			.request(app)
			.get('/api/trips/active')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get a list of all active trips', done => {
		chai
			.request(app)
			.get('/api/trips/active?page=1&limit=1')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});
});
