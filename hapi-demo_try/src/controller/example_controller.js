const ExampleValidation   =  require('../validations/example_validation'),
      ExampleFactory      =  require('../factory/example_factory'),
      Response            =  require('../utils/response'),
      Joi                 =  require('@hapi/joi');
       

// const response_format = Joi.object({
// 		is_success: Joi.boolean().required(),
// 		result: Joi.any().optional(),
// 		message: Joi.string().required(),
// 		status_code: Joi.number().required(),
// 	}),
// 	response = {
// 		status: {
// 			200: response_format,
// 			201: response_format,
// 			400: response_format,
// 			500: response_format,
// 		},
//     };
    
// For Mongo Database
exports.getAll = {
    description: "GET example: Get item list from mongo db",
    tags: ['api'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    handler:(request, h)=>{
        return ExampleFactory.getAll(request, h);
    },
    response
}

exports.addProduct = {
    description: "POST example: Add an item to the list",
    tags: ['api'],
    plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    validate: ExampleValidation.addProduct,
    handler:(request, h)=>{
        return ExampleFactory.addProduct(request, h);
    },
    response
}

exports.getOne = {
  description: "PUT example: updating product",
  tags: ['api'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.get_one,
  handler: (request, h)=>{
      return ExampleFactory.get_one(request, h);
  },
  response
}

exports.updateProduct = {
  description: "PUT example: updating product",
  tags: ['api'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.updateProduct,
  handler: (request, h)=>{
      return ExampleFactory.updateProduct(request, h);
  },
  response
}

exports.deleteProduct = {
  description: "DELETE example: for deleting product",
  tags: ['api','rest'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  },
  validate: ExampleValidation.deleteProduct,
  handler: (request, h)=>{
      return ExampleFactory.deleteProduct(request, h);
  },
  response
}
