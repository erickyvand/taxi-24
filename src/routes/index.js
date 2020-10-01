import express from 'express';
import DriverRoute from './driver.route';
import TripRoute from './trip.route';

const app = express();

app.use('/api/drivers', DriverRoute);
app.use('/api/trips', TripRoute);

export default app;
