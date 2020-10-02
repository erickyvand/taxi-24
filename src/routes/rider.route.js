import express from 'express';
import RiderController from '../controllers/rider.controller';
import { validateRiderUrlParam } from '../validations/rider.validation';
import { checkRiderExists } from '../middlewares/rider.middleware';

const router = express.Router();

router.get('/', RiderController.allRiders);
router.get(
	'/:riderId',
	validateRiderUrlParam,
	checkRiderExists,
	RiderController.specificRider
);

export default router;
