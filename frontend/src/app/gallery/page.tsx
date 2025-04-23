'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Illustration = {
    id: number;
    title: string;
    imageUrl: string;
};

export default function GalleryPage() {
    const [illustrations, setIllustrations] = useState<Illustration[]>([]);

    useEffect(() => {
        fetch('http://localhost:5096/api/illustrations')
            .then((res) => res.json())
            .then((data) => setIllustrations(data))
            .catch((err) => console.error('API Fehler:', err));
    }, []);

    return (
        <main className="bg-black min-h-screen px-6 py-10 text-gray-200 font-sans">
            <h1 className="text-4xl font-bold text-purple-500 text-center mb-10 tracking-wide">Meine Looks</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {illustrations.map((item) => (
                    <Link key={item.id} href={`/gallery/${item.id}`}>
                        <div className="relative group rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a] cursor-pointer">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-xl text-purple-400 font-semibold tracking-wide">{item.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}