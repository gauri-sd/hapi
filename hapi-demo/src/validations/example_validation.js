const Joi               = require("@hapi/joi"),
     // Response          = require('../utils/response'),
    //ResponseMessage   = require('../utils/responseMessages'),
     // StatusCode        = require('../utils/statusCodes'),
      //Constant          = require('../utils/constants'),
      log               = require('logger/logger');

module.exports = Object.freeze({

    // exports.create_product = {
    //     payload:{
    //         name: Joi.string().min(3).max(30).required(),
    //         price: Joi.number().required()
    //     },
    //     failAction: (request, h, error) => {
    //         return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
    //     }
    // }
    
    // exports.update_product = {
    //     payload:{
    //         name: Joi.string().optional(),
    //         price: Joi.number().optional()
    //     },
    //     failAction: (request, h, error) => {
    //         return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
    //     }
    // }
    
    create_product:{
        payload: {
            name: Joi.string().required().example('apple'),
            price: Joi.number().required().example('15'),
        },
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },

    update_product:{
        payload:{
            name: Joi.string().optional(),
            price: Joi.number().optional(),
        },
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },

//     get_one: {
//         params: {
//             id: Joi.string().required(),
//         },
//         failAction: (request, h, error) => {
//             return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
//         }
//     },

//    delete_product: {
//         params: {
//             id: Joi.string().required(),
//         },
//         failAction: (request, h, error) => {
//             return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
//         }
//     },

//     get_all: {
       
//     },
})