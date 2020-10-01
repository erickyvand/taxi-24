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
	static getDrivers(attribute, { limit, offset }) {
		return Driver.findAndCountAll({
			where: attribute,
			limit,
			offset,
		});
	}
}

export default DriverService;
