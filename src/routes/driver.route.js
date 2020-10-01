import express from 'express';
import DriverController from '../controllers/driver.controller';
import { checkLocationExists } from '../middlewares/driver.middleware';

const router = express.Router();

router.get('/', DriverController.getAllDrivers);
router.get('/available', DriverController.getAvailableDrivers);
router.get(
	'/:location/available',
	checkLocationExists,
	DriverController.getDriversSpecificLocation
);

export default router;
