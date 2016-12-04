'use strict'

class UserController {
     * register(request, response) {
        //const isLoggedIn = yield request.auth.check()
        //if (isLoggedIn) {
        //  response.redirect('/')
        //}

        yield response.sendView('register')
  }

    * login(request, response) {
        yield response.sendView('login')
    }

}
module.exports = UserController
