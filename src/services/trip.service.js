import models from '../database/models';

const { Trip } = models;

class TripService {
	static createTrip(attributes) {
		return Trip.create(attributes);
	}

	static findTrip(attribute) {
		return Trip.findOne({ where: attribute });
	}
}

export default TripService;
