import { Head, useForm } from '@inertiajs/react'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Button } from '../../components/ui/button'
import Footer from '../../components/ui/Footer'
import Navbar from "../../components/ui/Navbar";

export default function ContactPage() {
    const { data, setData, post, processing } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/contact')
    }

    return (
        <>
            <Navbar />
            <Head title="Kontak" />
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-6">Kontak</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* KIRI: Info Kontak */}
                    <div className="space-y-6">
                        <div className="p-4 border rounded shadow-sm bg-white">
                            <div className="flex items-center gap-4">
                                <div className="text-red-500 text-3xl">📞</div>
                                <div>
                                    <h2 className="font-semibold">Hubungi Kami</h2>
                                    <p className="text-sm text-gray-600">Tersedia 24 jam, 7 hari seminggu</p>
                                    <p className="text-sm text-gray-800 font-medium mt-1">Telepon: +880611122222</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border rounded shadow-sm bg-white">
                            <div className="flex items-center gap-4">
                                <div className="text-red-500 text-3xl">✉️</div>
                                <div>
                                    <h2 className="font-semibold">Tulis Pesan ke Kami</h2>
                                    <p className="text-sm text-gray-600">Isi formulir dan kami akan menghubungi Anda dalam 24 jam.</p>
                                    <p className="text-sm mt-1">Email: Klikikta@exclusive.com</p>
                                    <p className="text-sm">Email: KlikiktaOfficial@exclusive.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KANAN: Formulir */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:col-span-2 bg-white p-6 border rounded shadow-sm space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Input
                                required
                                placeholder="Nama Kamu *"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <Input
                                required
                                type="email"
                                placeholder="Email Kamu *"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <Input
                                required
                                placeholder="Nomor Kamu *"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                            />
                        </div>

                        <Textarea
                            required
                            rows={6}
                            placeholder="Pesan Kamu"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                        />

                        <div className="text-right">
                            <Button type="submit" disabled={processing}>
                                Kirim Pesan
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
