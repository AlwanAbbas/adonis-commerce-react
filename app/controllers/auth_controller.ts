import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

export default class AuthController {
  // =====================
  // LOGIN
  // =====================
  public showLogin({ inertia }: HttpContext) {
    return inertia.render('auth/login') // pastikan 'Auth/Login' sesuai dengan path Pages
  }

  public async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect('/')
    } catch {
      session.flash('errors', {
        email: 'Login gagal. Periksa kembali email dan password Anda.',
      })
      return response.redirect().back()
    }
  }

  // =====================
  // REGISTER
  // =====================
  public showRegister({ inertia }: HttpContext) {
    return inertia.render('auth/register') // pastikan 'Auth/Register' sesuai dengan path Pages
  }

  public async storeRegister({ request, response, auth, session }: HttpContext) {
    const { name, email, password } = request.only(['name', 'email', 'password'])

    // Cek apakah email sudah digunakan
    const existing = await User.findBy('email', email)
    if (existing) {
      session.flash('errors', { email: 'Email sudah digunakan.' })
      return response.redirect().back()
    }

    // Buat user baru
    const user = await User.create({
      fullName: name,
      email,
      password: await hash.make(password),
    })

    // Login otomatis setelah register
    await auth.use('web').login(user)
    return response.redirect('/')
  }
}
