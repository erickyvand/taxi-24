import express from 'express';
import DriverController from '../controllers/driver.controller';

const router = express.Router();

router.get('/', DriverController.getAllDrivers);
router.get('/available', DriverController.getAvailableDrivers)

export default router;