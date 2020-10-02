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

	static findTrips(attribute, { offset, limit }) {
		return Trip.findAndCountAll({
			where: attribute,
			order: [['id', 'DESC']],
			offset,
			limit,
		});
	}
}

export default TripService;
