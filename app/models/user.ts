import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

// Setup autentikasi menggunakan email + password
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare lastName: string | null // opsional agar tidak error jika tidak diisi

  @column()
  declare email: string

  @column()
  declare address: string | null // opsional juga

  @column({ serializeAs: null }) // agar tidak ikut diserialisasi ke frontend
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Method untuk verifikasi login
  // Gunakan verifyCredentials dari AuthFinder mixin
}
