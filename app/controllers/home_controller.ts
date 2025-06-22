import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class HomeController {
  public async index({ inertia }: HttpContext) {
    const products = await Product.all()
    return inertia.render('home', { products })
  }
}
