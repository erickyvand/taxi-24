import DriverService from '../services/driver.service';
import LocationService from '../services/location.service';
import ResponseService from '../services/response.service';
import RiderService from '../services/rider.service';
import TripService from '../services/trip.service';

export async function checkDriverIdExists(req, res, next) {
	const driver = await DriverService.getDriver({ id: req.body.driverId });

	if (!driver) {
		ResponseService.setError(404, 'Driver does not exist');
		return ResponseService.send(res);
	}
	next();
}

export async function checkRiderIdExists(req, res, next) {
	const rider = await RiderService.getRider({ id: req.body.riderId });

	if (!rider) {
		ResponseService.setError(404, 'Rider does not exist');
		return ResponseService.send(res);
	}
	next();
}

export async function checkLocationIdExists(req, res, next) {
	const originId = req.body.originId;
	const destinationId = req.body.destinationId;

	const origin = await LocationService.getLocation({ id: originId });
	const destination = await LocationService.getLocation({
		id: destinationId,
	});

	if (!origin) {
		ResponseService.setError(404, 'Origin does not exist');
		return ResponseService.send(res);
	}

	if (!destination) {
		ResponseService.setError(404, 'Destination does not exist');
		return ResponseService.send(res);
	}

	if (originId === destinationId) {
		ResponseService.setError(403, 'Origin must not be the same as Destination');
		return ResponseService.send(res);
	}
	next();
}

export async function checkTripDuplicate(req, res, next) {
	const tripId = `${req.body.driverId}${req.body.riderId}${req.body.originId}${req.body.destinationId}`;
	const trip = await TripService.findTrip({ tripId });

	if (trip) {
		ResponseService.setError(409, 'Trip request already exists');
		return ResponseService.send(res);
	}
	next();
}

export async function checkTripExists(req, res, next) {
	const trip = await TripService.findTrip({ id: req.params.tripId });

	if (!trip) {
		ResponseService.setError(404, 'Trip does not exists');
		return ResponseService.send(res);
	}
	next();
}
