import express from 'express';
import RiderController from '../controllers/rider.controller';

const router = express.Router();

router.get('/', RiderController.allRiders);

export default router;
