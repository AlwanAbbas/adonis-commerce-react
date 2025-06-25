import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Misalnya redirect ke halaman pencarian
            // Inertia.visit(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
            {/* Logo */}
            <h1 className="font-bold text-xl">KilkKita</h1>

            {/* Menu Navigasi */}
            <nav className="flex gap-6 text-sm">
                <Link href="/" className="hover:underline">Beranda</Link>
                <Link href="/contact" className="hover:underline">Kontak</Link>
                <Link href="/about" className="hover:underline">Tentang Kami</Link>
                <Link href="/register" className="hover:underline">Daftar</Link>
            </nav>

            {/* Search + Icon */}
            <div className="flex items-center gap-4">
                {/* Input dan Search */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Apa yang sedang kamu cari?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
                        onKeyDown={handleKeyDown}
                        className="border rounded px-4 py-2 text-sm w-64"
                    />
                    <button
                        onClick={handleSearch}
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                        <FaSearch className="text-base" />
                    </button>
                </div>

                {/* Ikon-ikon */}
                <FaHeart className="text-xl cursor-pointer" />
                <FaShoppingCart className="text-xl cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaUser className="text-white text-sm" />
                </div>
            </div>
        </header>
    );
}
