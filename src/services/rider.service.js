import models from '../database/models';

const { Rider } = models;

class RiderService {
	static getRider(attribute) {
		return Rider.findOne({ where: attribute });
	}
}

export default RiderService;
