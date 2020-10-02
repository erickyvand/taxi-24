import models from '../database/models';

const { Trip } = models;

class TripService {
	static createTrip(attributes) {
		return Trip.create(attributes);
	}

	static findTrip(attribute) {
		return Trip.findOne({ where: attribute });
	}

	static updateTrip(tripId, property) {
		return Trip.update(property, {
			where: tripId,
			returning: true,
		});
	}
}

export default TripService;
