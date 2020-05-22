let UserService = require('../services/UserService');



module.exports = async function (fastify) { 
    fastify.post('/register',
    {},
        async (request, reply) => {
           
            let result = await UserService.createUser(request.body);
            reply.send(result);
            console.log('kullanıcı kayıt oldu');

        },

    );

}
