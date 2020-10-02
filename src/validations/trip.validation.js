import joi from 'joi';
import joiDate from '@hapi/joi-date';
import ResponseService from '../services/response.service';

const Joi = joi.extend(joiDate);

export const validateTripBody = (req, res, next) => {
	const schema = Joi.object({
		driverId: Joi.number().integer().required().messages({
			'any.required': 'Driver Id is required',
			'number.base': 'Driver Id must be a number',
		}),
		riderId: Joi.number().integer().required().messages({
			'any.required': 'Rider Id is required',
			'number.base': 'Rider Id must be a number',
		}),
		originId: Joi.number().integer().required().messages({
			'any.required': 'Origin Id is required',
			'number.base': 'Origin Id must be a number',
		}),
		destinationId: Joi.number().integer().required().messages({
			'any.required': 'Destination Id is required',
			'number.base': 'Destination Id must be a number',
		}),
		departureDate: Joi.date()
			.greater('now')
			.utc()
			.format('YYYY-MM-DD')
			.required()
			.messages({
				'date.greater': 'Departure date must not be in the past',
				'date.format': 'Departure date must have format YYYY-MM-DD',
				'any.required': 'Departure date is required',
			}),
		amount: Joi.number().required().messages({
			'any.required': 'Amount is required',
			'number.base': 'Amouont must be a number',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);

	if (error) {
		const errors = error.details.map(err => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};

export const validateTripUrlParam = (req, res, next) => {
	const schema = Joi.object({
		tripId: Joi.string()
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
