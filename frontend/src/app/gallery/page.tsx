'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

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
        <main className="bg-[#0a001a] min-h-screen px-6 py-10 text-purple-100 font-sans">
            <h1 className="text-4xl font-bold text-purple-400 text-center mb-10 tracking-wide">Meine Looks</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                {illustrations.map((item) => (
                    <Link key={item.id} href={`/gallery/${item.id}`}>
                        <div
                            className="rounded-lg overflow-hidden bg-[#1a002a] shadow-md cursor-pointer hover:shadow-purple-500/30">
                            <div className="w-full p-2 flex items-center justify-center">
                                <motion.img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.05}}
                                    transition={{duration: 0.3}}
                                    className="w-2/5 h-auto object-contain"
                                />
                            </div>
                            <div className="px-3 pb-4">
                                <h2 className="text-sm font-semibold text-purple-300 truncate text-center">{item.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}