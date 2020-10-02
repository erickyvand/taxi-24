import express from 'express';
import DriverRoute from './driver.route';
import TripRoute from './trip.route';
import RiderRoute from './rider.route';

const app = express();

app.use('/api/drivers', DriverRoute);
app.use('/api/trips', TripRoute);
app.use('/api/riders', RiderRoute);

export default app;
