const controller = require('../controllers/controller');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) =>{
            return h.response({"status":"running"}).code(200)
        }
    },

     {
         method: "GET",
         path: "/api/product/{id}",
         config : controller.get_one
     },
    
    {
        method: "GET",
        path: "/api/product",
        config : controller.get_all
    },
    
    {
        method: "POST",
        path: "/api/product",
        config: controller.create_product
    },
    
    {
        method: "PUT",
        path: "/api/product/{id}",
        config: controller.update_product
    },
    
    {
        method: "DELETE",
        path: "/api/product/{id}",
        config: controller.delete_product
    },
]
