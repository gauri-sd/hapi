// const   Response            = require('../utils/response'),
//         ResponseMessage     = require('../utils/responseMessages'),
//         StatusCode          = require('../utils/statusCodes'),
//         Constant            = require('../utils/constants'),
//         ApiCallFactory      = require('../factory/api_call_factory'),
//         to                  = require('../utils/promise_handler'),
const Product       = require('../models/example_model');

// For Database
exports.getAll = async (request, reply)=>{
    try{
        var product = await Product.find().exec();
        return h.response(product);

    }
    catch(error)
    {
        return h.response(error).code(500);
    }
}

exports.getOne = async (request, reply)=>{
    try{
        var product = await Product.findById(request.params.id).exec();
        return h.response(product);
    }
    catch(error){
        return h.response(error).code(500);
    }
}

exports.addProduct = async (request, reply) =>{
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

exports.updateProduct = async(request, reply)=>{
    try{
        var product = await Product.findByIdAndUpdate(request.params.id, request.payload, {new: true});
        return h.response(product);
    }
    catch(error){
        return h.response(error).code(500);
    }
}
exports.deleteProduct = async(request, reply)=>{
    try{
        var product = await Product.findByIdAndDelete(request.params.id);
        return h.response(product);
    }
    catch(error){
        return h.response(error).code(500);
    }
}
