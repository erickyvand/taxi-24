import express from 'express';
import routes from './routes';
import ResponseService from './services/response.service';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
	ResponseService.setSuccess(200, 'Welcome to Taxi 24.');
	ResponseService.send(res);
});

app.use('/', (req, res) => {
	ResponseService.setError(
		404,
		'Route not found. Please provide the correct route.'
	);
	ResponseService.send(res);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
