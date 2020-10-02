import express from 'express';
import TripController from '../controllers/TripController';
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

export default router;