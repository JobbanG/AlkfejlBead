'use strict'

const Schema = use('Schema')

class ComponentTableSchema extends Schema {

  up () {
    this.create('component', (table) => {
      table.increments()
      table.integer('id').notNullable().unique().increments()
      table.integer('computer_id').unsigned().references('id').inTable('computer')
      table.string('name', 60)
      table.string('description', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('component')
  }

}

module.exports = ComponentTableSchema
