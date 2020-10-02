import { paginationHelper } from '../helpers';
import ResponseService from '../services/response.service';
import TripService from '../services/trip.service';

class TripController {
	static async createNewTrip(req, res) {
		const trip = await TripService.createTrip({
			tripId: `${req.body.driverId}${req.body.riderId}${req.body.originId}${req.body.destinationId}`,
			driverId: req.body.driverId,
			riderId: req.body.riderId,
			originId: req.body.originId,
			destinationId: req.body.destinationId,
			departureDate: req.body.departureDate,
			status: 'active',
		});
		ResponseService.setSuccess(201, 'Trip request successfully created', trip);
		return ResponseService.send(res);
	}

	static async completeTrip(req, res) {
		const completeTrip = await TripService.updateTrip(
			{ id: req.params.tripId },
			{ status: 'complete' }
		);
		ResponseService.setSuccess(
			200,
			'Trip has been completed successfully',
			completeTrip
		);
		return ResponseService.send(res);
	}

	static async activeTrips(req, res) {
		const { page = 1, limit = 10 } = req.query;
		const offset = (page - 1) * limit;

		const trips = await TripService.findTrips(
			{ status: 'active' },
			{ offset, limit }
		);
		ResponseService.setSuccess(200, 'List of active trips', {
			pageMeta: paginationHelper({
				count: trips.count,
				rows: trips.rows,
				offset,
				limit,
			}),
			rows: trips.rows,
		});
		return ResponseService.send(res);
	}
}

export default TripController;
