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
}

export default TripController;
