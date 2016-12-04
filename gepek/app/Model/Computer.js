'use strict'

const Lucid = use('Lucid')

class Computer extends Lucid {

  user () {
    return this.belongsTo('App/Model/User')
  }

  components () {
    return this.hasMany('App/Model/Component')
  }

}

module.exports = Computer