import Product from '#models/product'

export default class ProductSeeder {
  public async run() {
    await Product.createMany([
      { name: 'Lightstick NCT Official', price: 850000, imageUrl: '/images/nct.jpg' },
      { name: 'Lightstick Seventeen', price: 732000, imageUrl: '/images/seventeen.jpg' },
    ])
  }
}
