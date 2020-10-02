import express from 'express';
import TripController from '../controllers/trip.controller';
import {
	checkDriverIdExists,
	checkLocationIdExists,
	checkRiderIdExists,
	checkTripDuplicate,
	checkTripExists,
} from '../middlewares/trip.middleware';
import {
	validateTripBody,
	validateTripUrlParam,
} from '../validations/trip.validation';

const router = express.Router();

router.post(
	'/',
	validateTripBody,
	checkDriverIdExists,
	checkRiderIdExists,
	checkLocationIdExists,
	checkTripDuplicate,
	TripController.createNewTrip
);
router.patch(
	'/:tripId/complete',
	validateTripUrlParam,
	checkTripExists,
	TripController.completeTrip
);

router.get('/active', TripController.activeTrips);
router.get(
	'/:tripId/invoice',
	validateTripUrlParam,
	checkTripExists,
	TripController.getInvoice
);

export default router;
