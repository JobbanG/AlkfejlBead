'use strict'

const Schema = use('Schema')

class UserTableSchema extends Schema {

  up () {
    this.create('user', (table) => {
      table.increments()
      table.integer('id').notNullable().unique().increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user')
  }

}

module.exports = UserTableSchema
