import router from '@adonisjs/core/services/router'
import Product from '#models/product'
// import Contact from '#models/contact' // Hapus jika tidak dipakai
// import ContactController from '#controllers/contacts_controller'

router.get('/', [() => import('#controllers/home_controller'), 'index'])

router.get('/login', [() => import('#controllers/auth_controller'), 'showLogin'])
router.post('/login', [() => import('#controllers/auth_controller'), 'login'])

router.get('/register', [() => import('#controllers/auth_controller'), 'showRegister'])
router.post('/register', [() => import('#controllers/auth_controller'), 'storeRegister'])

router.get('/products/:id', async ({ params, inertia }) => {
  const product = await Product.findOrFail(params.id)
  return inertia.render('pages/products.show', { product })
})

// Gunakan controller instance langsung
router.get('/contact', [() => import('#controllers/contacts_controller'), 'showForm'])
router.post('/contact', [() => import('#controllers/contacts_controller'), 'submitForm'])

router.get('/about', [() => import('#controllers/about_controller'), 'index'])
