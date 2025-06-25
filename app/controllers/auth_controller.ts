import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

export default class AuthController {
  // =====================
  // TAMPILKAN HALAMAN LOGIN
  // =====================
  public showLogin({ inertia }: HttpContext) {
    return inertia.render('auth/login') // Pastikan ini sesuai dengan lokasi file frontend
  }

  // =====================
  // PROSES LOGIN
  // =====================
  public async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)

      return response.redirect('/') // Redirect ke halaman Home
    } catch {
      session.flash('errors', {
        email: 'Login gagal. Periksa kembali email dan password Anda.',
      })

      return response.redirect().back()
    }
  }

  // =====================
  // TAMPILKAN HALAMAN REGISTER
  // =====================
  public showRegister({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  // =====================
  // PROSES REGISTER
  // =====================
  public async storeRegister({ request, response, session }: HttpContext) {
    const { name, email, password, lastName, address } = request.only([
      'name',
      'email',
      'password',
      'lastName',
      'address',
    ])

    // Cek jika email sudah digunakan
    const existing = await User.findBy('email', email)
    if (existing) {
      session.flash('errors', { email: 'Email sudah digunakan.' })
      return response.redirect().back()
    }

    // Buat user baru
    await User.create({
      fullName: name,
      lastName: lastName || '',
      email,
      address: address || '',
      password: await hash.make(password),
    })

    // ✅ Flash notifikasi sukses
    session.flash('success', 'Akun berhasil dibuat. Silakan login.')
    return response.redirect('/login') // Redirect ke halaman login
  }

  // =====================
  // LOGOUT
  // =====================
  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
