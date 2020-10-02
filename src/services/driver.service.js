import models from '../database/models';

const { Driver } = models;

/**
 * Class which handle service of driver
 */
class DriverService {
	/**
	 * @returns {object} function to get all drivers
	 */
	static getDrivers({ limit, offset }) {
		return Driver.findAndCountAll({ limit, offset });
	}

	/**
	 * @returns {object} function to get available drivers
	 */
	static availableDrivers(attribute, { limit, offset }) {
		return Driver.findAndCountAll({
			where: attribute,
			limit,
			offset,
		});
	}

	/**
	 * @returns {object} function to get specific driver
	 */
	static getDriver(attribute) {
		return Driver.findOne({ where: attribute });
	}

	static findDrivers(attribute) {
		return Driver.findAll({
			where: attribute,
			order: [['position']],
			limit: 3,
		});
	}
}

export default DriverService;
