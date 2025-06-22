import { Button } from "../ui/button.js";
import { Link } from "@inertiajs/react";


export default function Navbar() {
    return (
        <header className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-6 py-4 shadow-md gap-4">
            <h1 className="font-bold text-lg">KlikKita</h1>

            <nav className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/">Beranda</Link>
                <Link href="/contact">Kontak</Link>
                <Link href="/about">Tentang Kami</Link>
                <Link href="/register">Daftar</Link>
            </nav>

            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full sm:w-auto">
                <input
                    type="text"
                    placeholder="Apa yang sedang kamu cari?"
                    className="border px-3 py-1 rounded text-sm w-full sm:w-64"
                />
                <Button className="text-white bg-blue-500 w-full sm:w-auto">Cari</Button>
            </div>
        </header>
    );
}
