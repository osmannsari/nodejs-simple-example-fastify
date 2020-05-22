let Token = require('../models/Token');
let bcrypt = require('bcryptjs');
let jwt = require(('jsonwebtoken'), { secret: 'supersecret' });
let Kullanici = require('../models/Kullanici');

class TokenService {

    static async createToken(newdata) {
        return new Promise((resolve, reject) => {

            const { username, password } = newdata;

            Kullanici.findOne({ username })
                .then(user => {
                    bcrypt.compare(password, user.password)

                        .then(data => {

                            if (!data) {
                                console.log("Kullanıcı adı veya şifre yanlış...");
                            }
                            else {
                                let token = jwt.sign({
                                    username,
                                    password,

                                }, 'secretkey');

                                let yeniToken = new Token({
                                    userType: user.userType,
                                    userid: user.id,
                                    username: user.username,
                                    password: user.password,
                                    token: token,
                                });
                                const promise=yeniToken.save();
                                console.log(user.id + ' giriş başarılı, token oluşturuldu: ' + token);
                                
                                resolve(token);


                                 









                                if (user.userType == 'admin') { 
                                    console.log('admin girişi');

                                } else {
                                    console.log('kullanıcı girişi');
                                }
                                

                            }
                        });

                })



        })
            .catch(error => console.log("Beklenmeyen bir hatayla karşılaşıldı..."));
    }
}
module.exports = TokenService;