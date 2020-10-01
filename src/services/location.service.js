import models from '../database/models';

const { Location } = models;

class LocationService {
	static getLocation(attribute) {
		return Location.findOne({ where: attribute });
	}
}

export default LocationService;
