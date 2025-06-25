/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| This file digunakan untuk registrasi middleware global dan router.
|
*/

import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

/**
 * Error handler untuk menangani exception menjadi HTTP response
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * Middleware yang selalu dijalankan, meskipun tidak ada route terdaftar
 */
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('@adonisjs/static/static_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
  () => import('@adonisjs/vite/vite_middleware'),
  () => import('@adonisjs/inertia/inertia_middleware'),
])

/**
 * Middleware untuk semua rute terdaftar
 */
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/session/session_middleware'), // ✅ session (wajib)
  () => import('@adonisjs/shield/shield_middleware'), // ✅ proteksi CSRF dll
  () => import('@adonisjs/auth/initialize_auth_middleware'), // ✅ auth init
])

/**
 * Middleware named, bisa digunakan seperti:
 * router.get('/dashboard').middleware('auth')
 */
export const middleware = router.named({
  guest: () => import('#middleware/guest_middleware'), // untuk tamu
  auth: () => import('#middleware/auth_middleware'), // untuk user login
})
