
let TokenService = require('../services/AuthSevice');
let Token = require('../models/Token');


let AuthInterceptor = require('../interceptors/AuthInterceptor');


module.exports = async function (fastify) {
    fastify.post("/login", {
     
    },
        async (request, reply) => {
            
            let sonuc = await TokenService.createToken(request.body);
                reply.header('authorization', sonuc).send(sonuc);
                console.log(request.headers);
            reply.send(request.userid);
                
                
        });
        
}


