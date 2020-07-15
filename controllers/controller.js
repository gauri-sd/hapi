const Product = require('../db');
const validation = require('../validation/validation');
const { validate } = require('joi');
const Response = require('../utils/response');

exports.create_product = {
	description: "POST example: Add product in mongo db",
  	tags: ['api'],
  	plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  	},
	validate: validation.create_product,
	handler: async(request, h) => {
		try{
			var product = new Product(request.payload);
			console.log(request.payload);
			console.log(product);
			var result = await product.save();
			console.log(result);
			return h.response(result);
		}
		catch(error){
			return h.response(error).code(500);
		}
	}
} 

// exports.get_all = {
// 	handler: async(request, h) => {
// 		Product.find({},{}, function(err,result) {
// 			console.log(result);
// 			return h.response(result);
// 		});
// 			//var result = {}
// 		return h.response();
// 	}
// }

exports.get_all = {
	description: "GET example: Get product list from mongo db",
	tags: ['api'],
	plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
	handler: async(request, h) => {
		try{
			var product = await Product.find().exec();
			return h.response(product);

		}
		catch(error)
		{
			return h.response(error).code(500);
		}
	}
}

exports.get_one = {
	description: "PUT example: Update product ",
  	tags: ['api'],
  	plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  	},
	handler: async(request, h) => {
		try{
			var product = await Product.findById(request.params.id).exec();
			return h.response(product);
		}
		catch(error){
			return h.response(error).code(500);
		}
	}
}

exports.update_product = {
	description: "DELETE example: DELETE product",
  	tags: ['api'],
  	plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
  	},
	validate: validation.update_product,
	handler: async(request, h) => {
		try{
			var product = await Product.findByIdAndUpdate(request.params.id, request.payload, {new: true});
			return h.response(product);
		}
		catch(error){
			return h.response(error).code(500);
		}
	}
}
   
exports.delete_product = {
	handler: async(request, h) => {
		try{
			var product = await Product.findByIdAndDelete(request.params.id);
			return h.response(product);
		}
		catch(error){
			return h.response(error).code(500);
		}
	}
}
