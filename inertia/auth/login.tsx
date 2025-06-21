import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-20 py-12 gap-10">
                    {/* Left Image */}
                    <div className="hidden md:block">
                        <img
                            src="/images/login-illustration.png"
                            alt="Login Illustration"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>

                    {/* Right Form */}
                    <Card className="w-full max-w-md mx-auto shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                                Login Sekarang & Nikmati Penawaran Spesial!
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Masukan detail anda dibawah
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label>Email atau Nomor Telepon</Label>
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
                                <div className="flex justify-between items-center">
                                    <Button type="submit" disabled={processing}>
                                        Masuk
                                    </Button>
                                    <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                                        Lupa Password?
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                <footer className="bg-blue-500 text-white py-10 px-4 md:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Exclusive</h4>
                            <p className="mb-2">Get 10% off your first order</p>
                            <Input placeholder="Enter your email" className="bg-white text-black" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Support</h4>
                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Account</h4>
                            <ul>
                                <li><Link href="/login">Login / Register</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                                <li><Link href="/shop">Shop</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Quick Link</h4>
                            <ul>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms Of Use</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Download App</h4>
                            <p>Save $3 with App New User Only</p>
                            <div className="flex gap-2 mt-2">
                                <img src="/images/googleplay.png" alt="Google Play" className="h-10" />
                                <img src="/images/appstore.png" alt="App Store" className="h-10" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-xs mt-10">© Copyright Rimel 2022. All right reserved</div>
                </footer>
            </div>
        </>
    )
}
