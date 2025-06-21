import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  public showLogin({ inertia }: HttpContext) {
    return inertia.render('Auth/Login')
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
}
