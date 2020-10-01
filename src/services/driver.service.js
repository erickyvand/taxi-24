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
}

export default DriverService;
