import { Op } from 'sequelize';
import { paginationHelper } from '../helpers';
import DriverService from '../services/driver.service';
import ResponseService from '../services/response.service';

class DriverController {
	static async getAllDrivers(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const offset = (page - 1) * limit;

		const drivers = await DriverService.getDrivers({ offset, limit });
		ResponseService.setSuccess(200, 'List of All Drivers', {
			pageMeta: paginationHelper({
				count: drivers.count,
				rows: drivers.rows,
				offset,
				limit,
			}),
			rows: drivers.rows,
		});
		return ResponseService.send(res);
	}

	static async getAvailableDrivers(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const offset = (page - 1) * limit;

		const drivers = await DriverService.availableDrivers(
			{ isAvailable: true },
			{ offset, limit }
		);
		ResponseService.setSuccess(200, 'List of Available Drivers', {
			pageMeta: paginationHelper({
				count: drivers.count,
				rows: drivers.rows,
				offset,
				limit,
			}),
			rows: drivers.rows,
		});
		return ResponseService.send(res);
	}

	static async getDriversSpecificLocation(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const offset = (page - 1) * limit;

		const drivers = await DriverService.availableDrivers(
			{
				isAvailable: true,
				locationId: req.params.locationId,
				position: { [Op.lte]: 3 },
			},
			{ offset, limit }
		);
		ResponseService.setSuccess(
			200,
			'List of Available Drivers within 3km for a specific location',
			{
				pageMeta: paginationHelper({
					count: drivers.count,
					rows: drivers.rows,
					offset,
					limit,
				}),
				rows: drivers.rows,
			}
		);
		return ResponseService.send(res);
	}

	static async specificDriver(req, res) {
		const driver = await DriverService.getDriver({ id: req.params.driverId });

		ResponseService.setSuccess(200, 'The Specific driver', driver);
		return ResponseService.send(res);
	}
}

export default DriverController;
