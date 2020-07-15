const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const swaggerOptions = {
    info: {
        title: 'Product API Documentation',
        version: '0.0.1',
    },
    grouping : 'tags',
    swaggerUI: true,
    documentationPage: true,
	documentationPath: "/documentation",
};

const register = async server =>{
    try{
        return server.register([
            Inert,
            Vision,
            {
                plugin: require('hapi-swagger'),
                options: swaggerOptions
            }
        ])
    }catch(error){
        log.info(`Error registering swagger plugin: ${error}`);
    }
}

module.exports = {
    register,
    info: { name: "Swagger Documentation", version: "1.0.0" },
};

