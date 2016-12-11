'use strict'

const Schema = use('Schema')

class ComputerTableSchema extends Schema {

  up () {
    this.create('computers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('user')
      table.string('name', 60)
      table.string('description', 254)
      table.string('motherboard', 60)
      table.string('processor', 60)
      table.string('video', 60)
      table.string('memory', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('computers')
  }

}

module.exports = ComputerTableSchema
