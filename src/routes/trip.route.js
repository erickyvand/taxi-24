import express from 'express';
import TripController from '../controllers/TripController';
import {
	checkDriverIdExists,
	checkLocationIdExists,
	checkRiderIdExists,
	checkTripExists,
} from '../middlewares/trip.middleware';
import { validateTripBody } from '../validations/trip.validation';

const router = express.Router();

router.post(
	'/',
	validateTripBody,
	checkDriverIdExists,
	checkRiderIdExists,
	checkLocationIdExists,
	checkTripExists,
	TripController.createNewTrip
);

export default router;
