'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {
    * login(req, res) {
        yield res.sendView('login');
    }

    * doLogin(req, res) {
        try{
            var post = req.post();
            console.log(post.email,post.password);
            yield req.auth.attempt(post.email, post.password);           
            res.redirect('/');
        }catch(e){
            yield req
                .withOut('password')
                .andWith({ errors: [{
                    message:'Bad credentials'
                }] })
                .flash()
            res.redirect('back')
            console.log(e);
            return
        }
    }

    * logout(req, res) {
        yield req.auth.logout();
        res.redirect('/');
    }

    * register(req, res) {
        yield res.sendView('register');
    }

    * doRegister(req, res) {
        var post = req.post();
        var userData = {
            username:post.username,
            email:post.email,
            password:post.password,
            password_confirm:post.password2
        };

        const validation = yield Validator.validateAll(userData, User.rules)

         if (validation.fails()) {
             yield req
                .withOut('password','password2')
                .andWith({ errors: validation.messages() })
                .flash()
                console.log("valami")
            res.redirect('back')
            return
         }

        userData.password = yield Hash.make(userData.password);
        var userData2 = {
            username:userData.username,
            email:userData.email,
            password:userData.password
        }
        var user = yield User.create(userData2);
        yield user.save();

        yield req.auth.login(user);

        res.redirect('/')
    }

    * doLogout (req, res) {
    yield req.auth.logout()
    res.redirect('/')
  }
}

module.exports = UserController
