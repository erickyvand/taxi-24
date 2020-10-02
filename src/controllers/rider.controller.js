import { paginationHelper } from '../helpers';
import DriverService from '../services/driver.service';
import ResponseService from '../services/response.service';
import RiderService from '../services/rider.service';

class RiderController {
	static async allRiders(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const offset = (page - 1) * limit;

		const riders = await RiderService.findRiders({ offset, limit });
		ResponseService.setSuccess(200, 'List of all riders', {
			pageMeta: paginationHelper({
				count: riders.count,
				rows: riders.rows,
				offset,
				limit,
			}),
			rows: riders.rows,
		});
		return ResponseService.send(res);
	}

	static async specificRider(req, res) {
		const rider = await RiderService.getRider({ id: req.params.riderId });
		ResponseService.setSuccess(200, 'Specific Rider', rider);
		return ResponseService.send(res);
	}

	static async closeDrivers(req, res) {
		const drivers = await DriverService.findDrivers({
			riderId: req.params.riderId,
		});
		ResponseService.setSuccess(200, 'Closest Driver for this Rider', drivers);
		return ResponseService.send(res);
	}
}

export default RiderController;
