'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

static get rules(){
      return {
        username: 'required|alpha_numeric|unique:users',
        email: 'required|email|unique:users',
        password: 'required|min:4',
        password_confirm: 'required|same:password',
      }
}

  computers () {
    return this.hasMany('App/Model/Computer')
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }
  
}

module.exports = User