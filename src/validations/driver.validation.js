import Joi from 'joi';
import ResponseService from '../services/response.service';

export const validateDriverUrlParam = (req, res, next) => {
	const schema = Joi.object({
		driverId: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.messages({
				'string.pattern.base': 'Id must be a number',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.params);

	if (error) {
		const errors = error.details.map(error => error.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};

export const validateLocationUrlParam = (req, res, next) => {
	const schema = Joi.object({
		locationId: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.messages({
				'string.pattern.base': 'Id must be a number',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.params);

	if (error) {
		const errors = error.details.map(error => error.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};
