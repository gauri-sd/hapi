const ExampleValidation   =  require('../validations/example_validation'),
      ExampleFactory      =  require('../factory/factory'),
      Response            =  require('../utils/response'),
      Joi                 =  require('@hapi/joi');
       

const response_format = Joi.object({
		is_success: Joi.boolean().required(),
		result: Joi.any().optional(),
		message: Joi.string().required(),
		status_code: Joi.number().required(),
	}),
	response = {
		status: {
			200: response_format,
			201: response_format,
			400: response_format,
			500: response_format,
		},
  };

    // For Mongo Database
exports.get_all = {
    description: "GET example: Get product list from mongo db",
    tags: ['api','mongodb'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    //validate: {},
    handler:(request, h)=>{
        return ExampleFactory.get_all(request, h);
    },
    response
}

exports.get_one = {
  description: "GET example: Get product by id from mongo db",
  tags: ['api','mongodb'],
  plugins: {
  "hapi-swaggered": {
    responses: Response.responses,
  },
  },
  //validate: ExampleValidation.update_product,
  handler:(request, h)=>{
      return ExampleFactory.get_one(request, h);
  },
  response
}

exports.create_product = {
    description: "POST example: Add an item to the list",
    tags: ['api','mongodb'],
    plugins: {
		"hapi-swaggered": {
		  responses: Response.responses,
		},
    },
    validate: ExampleValidation.create_product,
    handler:(request, h)=>{
        return ExampleFactory.create_product(request, h);
    },
    response
}

exports.update_product = {
  description: "PUT example: Add an updated product to the list",
  tags: ['api','mongodb'],
  plugins: {
  "hapi-swaggered": {
    responses: Response.responses,
  },
  },
  validate: ExampleValidation.update_product,
  handler:(request, h)=>{
    return ExampleFactory.update_product(request, h);
  },
  response
}

exports.delete_product = {
  description: "DELETE example: Delete product from mongo db",
  tags: ['api','mongodb'],
  plugins: {
  "hapi-swaggered": {
    responses: Response.responses,
  },
  },
  //validate: ExampleValidation.delete_product,
  handler:(request, h)=>{
      return ExampleFactory.delete_product(request, h);
  },
  response
}