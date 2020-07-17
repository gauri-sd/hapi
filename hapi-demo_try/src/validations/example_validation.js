const Joi               = require("@hapi/joi"),
    //   Response          = require('../utils/response'),
    //   ResponseMessage   = require('../utils/responseMessages'),
    //   StatusCode        = require('../utils/statusCodes'),
    //   Constant          = require('../utils/constants'),
      log               = require('logger/logger');

module.exports = Object.freeze({
    
    addProduct:{
        payload: {
            name: Joi.string().required().example('apple'),
            price: Joi.number().required.example('15'),
        },
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
    
    getOne:{
        params:{
            _id: Joi.string().required().example('25451fg'),
        },
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },

    updateProduct:{
        params:{
            _id: Joi.string().required().example('25451fg'),
        },
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },

    deleteProduct:{
        params:{
            _id: Joi.string().required().example('25451fg'),
        },
        failAction: (request, h, error) => {
            return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
        }
    },
})