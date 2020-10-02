import models from '../database/models';

const { Rider } = models;

class RiderService {
	static getRider(attribute) {
		return Rider.findOne({ where: attribute });
	}

	static findRiders({ offset, limit }) {
		return Rider.findAndCountAll({ order: [['id', 'DESC']], offset, limit });
	}
}

export default RiderService;
