'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  computers () {
    return this.hasMany('App/Model/Computer')
  }
  
}

module.exports = User