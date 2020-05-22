
let AuthInterceptor = require('../interceptors/AuthInterceptor');
let Token = require('../models/Token');


module.exports = async function (fastify) {
    fastify.post("/todo", {
         preHandler: AuthInterceptor

    },
        async (request, reply) => {
            
             reply.send(request.user);
            
          


        });

}