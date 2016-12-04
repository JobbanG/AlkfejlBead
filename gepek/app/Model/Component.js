'use strict'

const Lucid = use('Lucid')

class Component extends Lucid {

  computer () {
    return this.belongsTo('App/Model/Computer')
  }
  
}

module.exports = Component