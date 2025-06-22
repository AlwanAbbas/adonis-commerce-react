import { Head } from '@inertiajs/react'
import { Button } from '../../../components/ui/button'
import Footer from "../../../components/ui/Footer"

export default function ProductShow({ product }: { product: any }) {
    return (
        <>
            <Head title={product.name} />
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={product.imageUrl} alt={product.name} className="rounded-xl shadow-lg" />

                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-xl text-green-600 my-2">Rp {product.price.toLocaleString()}</p>
                        <p className="text-gray-600 mb-4">Lightstick resmi dengan desain unik dan cahaya neon hijau. 100% original.</p>

                        <div className="flex items-center gap-4 mb-4">
                            <input
                                type="number"
                                defaultValue={1}
                                min={1}
                                className="w-16 border rounded px-2 py-1 text-center"
                            />
                            <Button className="bg-blue-600 text-white">Beli Sekarang</Button>
                        </div>

                        <div className="text-sm text-gray-700 space-y-2">
                            <p>🚚 Gratis Pengiriman</p>
                            <p>🔁 Pengembalian Gratis 30 Hari</p>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
