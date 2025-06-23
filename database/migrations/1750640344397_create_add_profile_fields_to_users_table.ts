import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateAddProfileFieldsToUsersTable extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('first_name')
      table.string('last_name')
      table.string('address')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('first_name')
      table.dropColumn('last_name')
      table.dropColumn('address')
    })
  }
}
