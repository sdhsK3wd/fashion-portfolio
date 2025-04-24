'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-endVoid border-b border-endAccent shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl text-endCrystal font-bold tracking-wider">
                    FashionArt
                </h1>
                <div className="flex gap-6">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'Galerie', href: '/gallery' },
                        { label: 'Kontakt', href: '/contact' },
                    ].map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-endCrystal hover:text-white px-3 py-1 hover:border-b-2 hover:border-endCrystal transition"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
