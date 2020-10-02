import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.should();
chai.use(chaiHttp);

describe('/POST trips', () => {
	it('Should create new trip request', done => {
		const trip = {
			driverId: '1',
			riderId: '1',
			originId: '4',
			destinationId: '5',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(201);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should validate trip body', done => {
		const trip = {
			driverId: '1',
			riderId: '1',
			originId: '4',
			destinationId: '5',
			departureDate: '2020-10-09',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(400);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if origin is the same as destination', done => {
		const trip = {
			driverId: '1',
			riderId: '1',
			originId: '4',
			destinationId: '4',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(403);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if location exists', done => {
		const trip = {
			driverId: '1',
			riderId: '1',
			originId: '2',
			destinationId: '50',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if location exists', done => {
		const trip = {
			driverId: '1',
			riderId: '1',
			originId: '99',
			destinationId: '5',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if rider exists', done => {
		const trip = {
			driverId: '1',
			riderId: '99',
			originId: '4',
			destinationId: '5',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check if driver exists', done => {
		const trip = {
			driverId: '99',
			riderId: '1',
			originId: '4',
			destinationId: '5',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(404);
				res.body.should.have.property('message');
				done();
			});
	});

	it('Should check trip has been created', done => {
		const trip = {
			driverId: '1',
			riderId: '1',
			originId: '4',
			destinationId: '5',
			departureDate: '2020-10-09',
			amount: '4000',
		};
		chai
			.request(app)
			.post('/api/trips')
			.send(trip)
			.end((err, res) => {
				res.body.should.be.an('object');
				res.status.should.be.equal(409);
				res.body.should.have.property('message');
				done();
			});
	});
});
