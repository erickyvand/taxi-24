import DriverService from '../services/driver.service';
import LocationService from '../services/location.service';
import ResponseService from '../services/response.service';

export async function checkLocationExists(req, res, next) {
	const location = await LocationService.getLocation({
		id: req.params.locationId,
	});

	if (!location) {
		ResponseService.setError(404, 'No location found');
		return ResponseService.send(res);
	}
	next();
}

export async function checkDriverExists(req, res, next) {
	const driver = await DriverService.getDriver({ id: req.params.driverId });

	if (!driver) {
		ResponseService.setError(404, 'Driver does not exist');
		return ResponseService.send(res);
	}
	next();
}
