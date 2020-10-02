import ResponseService from '../services/response.service';
import RiderService from '../services/rider.service';

export async function checkRiderExists(req, res, next) {
	const rider = await RiderService.getRider({ id: req.params.riderId });

	if (!rider) {
		ResponseService.setError(404, 'Rider does not exist');
		return ResponseService.send(res);
	}
	next();
}
