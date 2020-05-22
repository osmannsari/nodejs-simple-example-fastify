
let Token = require('../models/Token');
let Todo = require('../models/Todo');

module.exports = (request, reply, done) => {

    let token = request.headers['authorization'];
    if (!token) { return reply.status(401).send('Access Denied') }
    else {
        console.log('token: ' + token);
        Token.findOne({ token })
            .then(currenttuser => {
                console.log('Kullanıcı bilgileri: '+currenttuser)
                let x=currenttuser.userid;
                console.log('userid :' + x);
               
   let yeniTodo = new Todo({
                    userid: x,
                    token: token,
                    todo: request.body.project,
                    userType:'admin',
                })
                const promise = yeniTodo.save();
                reply.send(currenttuser.userid);
               // let user=currenttuser.userid;
            })
        done();
    }

}



// Token.findOne({ token })
//             .then(currenttuser => {

//                 //reply.send('userid: ' + user.username);
//                 console.log(currenttuser);
//                 request.user = currenttuser;
//             })