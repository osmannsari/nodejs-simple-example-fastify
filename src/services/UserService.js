
let Kullanici = require('../models/Kullanici');
let bcrypt=require('bcryptjs')

class UserService {

    static async createUser(data) {
        bcrypt.hash(data.password, 10).then((hash) => {

            var yeniKullanici = new Kullanici({
                userType: data.userType,
                email: data.email,
                username: data.username,
                password: hash,
            });
            const promise=yeniKullanici.save();
            console.log('test');
         
        })
    }
}
module.exports = UserService;


    // static createUser (data){
    //     return new Promise((resolve,reject)=>{
    //         var yeniKullanici = new Kullanici({

    //             email:data.email,
    //             username:data.username,
    //             password: passwordHash.generate(data.password),

    //           })
    //          console.log('test2');
    //           yeniKullanici.save(function(err){
    //             if(err){
    //              reject(err);
    //             }else{
    //               resolve(yeniKullanici)
    //             }
    //           })
    //     });
    // }




    // bcrypt.genSalt(saltRounds, function (err, salt) {
    //     if (err) {
    //       throw err
    //     } else {
    //       bcrypt.hash(data.password, salt, function(err, hash) {
    //         if (err) {
    //           throw err
    //         } else {
    //           console.log(hash)
    //           //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
    //         }
    //       })
    //     }
    //   })