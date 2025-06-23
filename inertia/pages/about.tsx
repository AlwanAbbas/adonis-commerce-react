import { Head } from '@inertiajs/react'
import { Card, CardContent } from '../../components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '../../components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Footer from '../../components/ui/Footer'
import Navbar from "../../components/ui/Navbar";

const team = [
    {
        name: 'M. Alwan Abbas',
        role: 'Frontend',
        image: '/images/team/alwan.jpg',
        socials: { twitter: '#', instagram: '#', linkedin: '#' },
    },
    {
        name: 'Ariz Abiyyu',
        role: 'Backend',
        image: '/images/team/ariz.jpg',
        socials: { twitter: '#', instagram: '#', linkedin: '#' },
    },
    {
        name: 'Fattatun Nida',
        role: 'Editor',
        image: '/images/team/nida.jpg',
        socials: { twitter: '#', instagram: '#', linkedin: '#' },
    },
    {
        name: 'Ardhita Ika Siwi',
        role: 'Desainer',
        image: '/images/team/ika.jpg',
        socials: { twitter: '#', instagram: '#', linkedin: '#' },
    },
]

const stats = [
    { label: 'Penjual aktif di situs kami', value: '10.5k', icon: '🛒' },
    { label: 'Penjualan produk per bulan', value: '33k', icon: '💰' },
    { label: 'Pelanggan aktif di situs kami', value: '45.5k', icon: '🛍️' },
    { label: 'Jumlah pengembalian', value: '25k', icon: '🔁' },
]

export default function About() {
    return (
        <>
        <Navbar />
            <Head title="Tentang Kami" />
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-4 text-center mx-auto">KlikKita</h1>
                <p className="text-gray-700 leading-7 max-w-xl text-center mx-auto mb-8">
                    KlikKita adalah platform belanja online yang hadir untuk memudahkan kamu menemukan berbagai kebutuhan dalam satu tempat. Mulai dari produk fashion, elektronik, aksesoris, hingga perlengkapan rumah — semua tersedia dengan harga terjangkau dan kualitas terpercaya.

                    Kami percaya belanja online harusnya praktis, seru, dan aman. Dengan tampilan yang simpel dan proses checkout yang cepat, kami ingin jadi solusi belanja favorit kamu setiap hari.

                    Didukung oleh tim yang kreatif dan semangat, KlikKita terus berkembang untuk memberikan pengalaman belanja terbaik bagi semua pengguna di Indonesia.
                </p>
                <img src="../public/assets/logoPT.png" alt="KlikKita Logo" className="w-1/3 mx-auto my-8" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {stats.map((s, i) => (
                        <Card key={i} className="text-center">
                            <CardContent className="py-6">
                                <div className="text-4xl mb-2">{s.icon}</div>
                                <div className="text-2xl font-bold">{s.value}</div>
                                <div className="text-sm text-gray-500">{s.label}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <h2 className="text-xl font-semibold mt-12 mb-4 text-center">Tim Kami</h2>
                <Carousel
                    plugins={[Autoplay({ delay: 4000 })]}
                    opts={{ loop: true }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {team.map((member, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                                <Card className="overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
                                    <CardContent className="text-center mt-2">
                                        <p className="font-semibold">{member.name}</p>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                        <div className="flex justify-center gap-3 mt-1">
                                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                                                <Twitter className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform" />
                                            </a>
                                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                                <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition-transform" />
                                            </a>
                                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                                <Linkedin className="w-5 h-5 text-blue-700 hover:scale-110 transition-transform" />
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <Footer />
        </>
    )
}
