'use strict';

const Hapi = require('hapi');

const product = require('./routes/routes'); 
//console.log(product);

const swagger = require('./swagger/swagger');

// Create a server with a host and port  
const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

for(const route in product){
   server.route(product[route]);
 }

// async function registerPlugins(){
//   await server.register([
//     Inert,
//     Vision,
//     {
//         plugins: HapiSwagger,
//         options: swagger
//     }
//   ]);
// }
// registerPlugins();

// Add the route  
server.route({
  method: 'GET',
  path: '/hello',
  // options: {
  //   description: 'Get method',
  //   notes: 'Returns hello',
  //   tags: ['api'],
    handler: function (request, h) {
      return 'Hello World!';
    }

});

// Start the server  
async function start () {

  try {
    await server.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
