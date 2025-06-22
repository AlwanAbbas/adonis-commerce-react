// app/controllers/contacts_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Contact from '#models/contact'

export default class ContactsController {
  public async showForm({ inertia }: HttpContext) {
    return inertia.render('contact') // pastikan file pages/contact.tsx ada
  }

  public async submitForm({ request, response, session }: HttpContext) {
    const data = request.only(['name', 'email', 'phone', 'message'])
    await Contact.create(data)

    session.flash('success', 'Pesan kamu telah dikirim.')
    return response.redirect().back()
  }
}
