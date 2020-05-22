let Todo = require('../models/Todo');
let Token = require('../models/Token');


module.exports = async function (fastify) {
    fastify.post("/todolist", {
    },
        async (request, reply) => {
            // let token=request.body.token;
            let token = request.headers['authorization'];
            console.log('token: ' + token);

            if (!token) { return reply.status(401).send('Access Denied') }

            else {
                Token.findOne({ token })
                    .then(currenttuser => {
                        console.log('userdeneme123 : ' + currenttuser)
                        let userid = currenttuser.userid;
                        let usertype = currenttuser.userType;
                        let username=currenttuser.username;
                        console.log(userid)
                        console.log('usertype: ' + usertype)

                        
                      if(userid=='5e663ffbd46863209880154f'){
                        Todo.find({  }, { _id: 0, todo: 1, _v: 2 })
                        .then(currenttodo => {

                            console.log('todo :' + currenttodo);
                            
                            console.log('ADMİN');
                            reply.send(currenttodo);
                        });
                       
                      }else{
                        Todo.find({ userid }, { _id: 0, todo: 1, _v: 2 })
                            .then(currenttodo => {

                                console.log('todo :' + currenttodo);
                                console.log('USER');

                                reply.send(currenttodo);



                            });
                        }
                    })
                }
























                //         else {
                //             Token.findOne({ token })
                //             .then(currenttuser => {
                //                 console.log('userdeneme123 : '+currenttuser)
                //                 let userid=currenttuser.userid;
                //                 let usertype=currenttuser.userType;
                //                 console.log(userid)
                //                 console.log('usertype: '+usertype)

                //                 let user=this.userid;

                //             if(usertype=='admin'){
                //                 //admin girişi userType
                //                 let query =  this.usertype ;

                //                 Todo.find( {query}, {_id:0,todo:1,_v:2})
                //                 .then(nowtodo => {

                //                     console.log('todo :' + nowtodo);
                //                     console.log('ADMİN YERİ')
                //                     reply.send(nowtodo);



                //                 });

                //             }
                //             else{

                //                 Todo.find({ user }, {_id:0,todo:1,_v:2})
                //                 .then(currenttodo => {

                //                     console.log('todo :' + currenttodo);
                //                     console.log('USER ');

                //                     reply.send(currenttodo);



                //                 });

                //             }
                //             })



                //         };

            });
}