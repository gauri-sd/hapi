const Joi = require('joi');

exports.create_product = {
	payload:{
		name: Joi.string().min(3).max(30).required(),
		price: Joi.number().required()
	},
	failAction: (request, h, error) => {
		return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
	}
}

exports.update_product = {
	payload:{
		name: Joi.string().optional(),
		price: Joi.number().optional()
	},
	failAction: (request, h, error) => {
		return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
	}
}




	
	

