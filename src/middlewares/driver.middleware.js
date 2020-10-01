import DriverService from '../services/driver.service';
import ResponseService from '../services/response.service';

export async function checkLocationExists(req, res, next) {
	const location = await DriverService.getDriver({
		location: req.params.location,
	});

	if (!location) {
		ResponseService.setError(404, 'No location found');
		return ResponseService.send(res);
	}
	next();
}
