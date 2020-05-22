let fastify = require('fastify')({ logger: false });
let Database = require('./src/utils/Database');
const cors = require('cors');
const morgan = require('morgan');
let UserController = require('./src/controllers/UserController');
let TodoController = require('./src/controllers/TodoController');

const config = require('./src/config/config');
let jwt = require('fastify-jwt', {
    secret: 'supersecret'
});
let Login = require('./src/controllers/AuthLogin');
let ErrorHandler = require('./src/interceptors/ErrorInterceptor');
let TodoListController=require('./src/controllers/TodoListController');
let TextController=require('./src/controllers/TextController');




(async function () {
    try {
        await Database.start();
        fastify.use(cors());
        fastify.use(morgan('combine'));
        console.log("mongodb bağlandı")
        ErrorHandler(fastify);

        fastify.register(UserController, { prefix: '/' });
        fastify.register(Login, { prefix: '/' });
        fastify.register(TodoController, { prefix: '/' });
        fastify.register(TodoListController, { prefix: '/' });
        fastify.register(TextController, { prefix: '/' });

        fastify.listen(config.port, function (err, add) {
            if (err) {
                console.log(err);
                process.exit(1);
            } else {
                console.log('Connected');
            }

        });


    }
    catch (error) {
        console.log(error);
    }

})();




