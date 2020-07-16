const Product = require('../models/example_model');

exports.create_product = async(request, h)=>{
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

exports.get_all = async(request, h)=>{
    try{
        var product = await Product.find().exec();
        return h.response(product);
    }
    catch(error)
    {
        return h.response(error).code(500);
    }
}

exports.get_one = async(request, h)=>{
    try{
        var product = await Product.findById(request.params.id).exec();
        return h.response(product);
    }
    catch(error){
        return h.response(error).code(500);
    }
}

exports.update_product = async(request, h)=>{
    try{
        var product = await Product.findByIdAndUpdate(request.params.id, request.payload, {new: true});
        return h.response(product);
    }
    catch(error){
        return h.response(error).code(500);
    }
}

exports.delete_product = async(request, h)=>{
    try{
        var product = await Product.findByIdAndDelete(request.params.id);
        return h.response(product);
    }
    catch(error){
        return h.response(error).code(500);
    }
}



