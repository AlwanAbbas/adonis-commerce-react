import { Head, Link } from '@inertiajs/react'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import Footer from '../../components/ui/Footer'
import Navbar from "../../components/ui/Navbar";

interface Product {
  id: number
  name: string
  price: number
  image_url: string
}

interface Props {
  products: Product[]
}

export default function Home({ products }: Props) {
  return (
    <>
      <Head title="Beranda" />

      {/* Banner Promo */}
      <div className="bg-blue-500 text-white text-sm text-center py-2 px-4">
        Diskon Musim Panas untuk Semua Cardigan Rajut - Diskon 15%!{' '}
        <Link href="/" className="underline">
          Belanja Sekarang!
        </Link>
      </div>

      {/* Header */}
      <Navbar />
      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-20 py-10 space-y-16">
        {/* Produk Terbaru */}
        <section>
          <h2 className="text-xl font-bold mb-6">Produk Terbaru</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <Card key={product.id} className="text-sm">
                <CardContent className="p-4 space-y-3">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-32 w-full object-cover rounded"
                  />
                  <p className="font-medium line-clamp-1 break-words">{product.name}</p>
                  <p className="text-red-500 font-semibold">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                  <Button size="sm" className="w-full">
                    Tambah ke Troli
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}
