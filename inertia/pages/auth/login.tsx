import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import Footer from "../../../components/ui/Footer"

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/login')
    }

    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen flex flex-col justify-between">
                {/* Header */}
                <div className="bg-blue-500 text-white text-center py-2 text-sm">
                    Diskon Musim Panas untuk Semua Cardigan Rajut - Diskon 15%!{' '}
                    <Link href="/" className="underline">
                        Belanja Sekarang!
                    </Link>
                </div>

                {/* Main Content */}
                <div className="flex-1 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2 hidden md:flex justify-center">
                        <img
                            src="../public/assets/logoPT.png"
                            alt="KlikKita"
                            className="w-full max-w-md"
                        />
                    </div>

                    {/* Right Form */}
                    <div className="w-full md:w-1/2">
                        <Card className="w-full max-w-md mx-auto shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-center md:text-left">
                                    Login Sekarang & Nikmati Penawaran Spesial!
                                </CardTitle>
                                <p className="text-sm text-muted-foreground text-center md:text-left">
                                    Masukan detail anda dibawah
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Label className='mb-3'>Email atau Nomor Telepon</Label>
                                        <Input
                                            type="text"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="Email atau Nomor Telepon"
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <Label className='mb-3'>Password</Label>
                                        <Input
                                            type="password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder="Password"
                                        />
                                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                                        <Button type="submit" disabled={processing} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                                            Masuk
                                        </Button>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-blue-500">
                                            <Link href="/forgot-password" className="hover:underline">
                                                Lupa Password?
                                            </Link>
                                            <span className="hidden sm:inline">|</span>
                                            <Link href="/register" className="hover:underline">
                                                Daftar Sekarang
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}
