import express from 'express';
import DriverRoute from './driver.route';

const app = express();

app.use('/api/drivers', DriverRoute);

export default app;