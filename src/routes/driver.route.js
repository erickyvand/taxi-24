import express from 'express';
import DriverController from '../controllers/driver.controller';
import {
	checkDriverExists,
	checkLocationExists,
} from '../middlewares/driver.middleware';
import { validateDriverUrlParam, validateLocationUrlParam } from '../validations/driver.validation';

const router = express.Router();

router.get('/', DriverController.getAllDrivers);
router.get('/available', DriverController.getAvailableDrivers);
router.get(
	'/:locationId/available',
	validateLocationUrlParam,
	checkLocationExists,
	DriverController.getDriversSpecificLocation
);
router.get(
	'/:driverId/',
	validateDriverUrlParam,
	checkDriverExists,
	DriverController.specificDriver
);

export default router;
