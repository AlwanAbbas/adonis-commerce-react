// resources/js/Pages/Auth/Register.tsx
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import Footer from "../../../components/ui/Footer"
import { FcGoogle } from 'react-icons/fc'

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/register')
    }

    return (
        <>
            <Head title="Register" />
            <div className="min-h-screen flex flex-col justify-between">
                {/* Header */}
                <div className="bg-blue-500 text-white text-center py-2 text-sm">
                    Diskon Musim Panas untuk Semua Cardigan Rajut - Diskon 15%!{' '}
                    <Link href="/" className="underline">
                        Belanja Sekarang!
                    </Link>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-20 py-12 gap-10">
                    {/* Left Image */}
                    <div className="hidden md:block">
                        <img
                            src="../public/assets/logoPT.png"
                            alt="KlikKita"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>

                    {/* Right Form */}
                    <Card className="w-full max-w-md mx-auto shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Buat Akun Sekarang</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Masukkan detail anda dibawah
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label>Nama</Label>
                                    <Input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Nama Lengkap"
                                    />
                                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                </div>
                                <div>
                                    <Label>Email dan Nomor Telepon</Label>
                                    <Input
                                        type="text"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Email atau Nomor Telepon"
                                    />
                                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                </div>
                                <div>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                    />
                                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                                </div>
                                <Button type="submit" disabled={processing} className="w-full">
                                    Buat Akun
                                </Button>
                            </form>
                            <div className="flex items-center my-4">
                                <hr className="flex-grow border-gray-300" />
                                <span className="px-2 text-sm text-gray-500">atau</span>
                                <hr className="flex-grow border-gray-300" />
                            </div>
                            <Button variant="outline" className="w-full flex gap-2">
                                <FcGoogle size={20} /> Masuk dengan Google
                            </Button>
                            <p className="text-center text-sm mt-4">
                                Sudah Punya Akun?{' '}
                                <Link href="/login" className="text-blue-500 hover:underline">
                                    Masuk
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
