'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthSchema extends Schema {
  up () {
    this.create('auths', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('auths')
  }
}

module.exports = AuthSchema
