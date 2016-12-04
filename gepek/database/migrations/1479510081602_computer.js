'use strict'

const Schema = use('Schema')

class ComputerTableSchema extends Schema {

  up () {
    this.create('computer', (table) => {
      table.increments()
      table.integer('id').notNullable().unique().increments()
      table.integer('user_id').unsigned().references('id').inTable('user')
      table.string('name', 60)
      table.string('description', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('computer')
  }

}

module.exports = ComputerTableSchema
