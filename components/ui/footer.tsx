import { Input } from '../ui/input.js'
import { Link } from "@inertiajs/react"

export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
                {/* Brand + Newsletter */}
                <div>
                    <h4 className="font-semibold mb-2">KlikKita</h4>
                    <p className="mb-2">Get 10% off your first order</p>
                    <Input placeholder="Enter your email" className="bg-white text-black" />
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <p>Ngawi Barat</p>
                    <p>kicaumania@gmail.com</p>
                    <p>+628**-****-***</p>
                </div>

                {/* Account */}
                <div>
                    <h4 className="font-semibold mb-2">Account</h4>
                    <ul className="space-y-1">
                        <li><Link href="/login">Login / Register</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                        <li><Link href="/wishlist">Wishlist</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div>
                    <h4 className="font-semibold mb-2">Quick Link</h4>
                    <ul className="space-y-1">
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms Of Use</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h4 className="font-semibold mb-2">Download App</h4>
                    <p>Save $3 with App New User Only</p>
                    <div className="flex gap-2 mt-2">
                        <img src="/images/googleplay.png" alt="Google Play" className="h-10" />
                        <img src="/images/appstore.png" alt="App Store" className="h-10" />
                    </div>
                </div>
            </div>

            <div className="text-center text-xs mt-10">
                © Copyright KlikKita 2025. All right reserved
            </div>
        </footer>
    )
}