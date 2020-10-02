import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/GET get all drivers', () => {
	it('Should get all drivers', done => {
		chai
			.request(app)
			.get('/api/drivers')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should get all drivers', done => {
		chai
			.request(app)
			.get('/api/drivers?page=1&limit=2')
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(200);
				res.body.should.have.property('message');
				done();
			});
	});
});
