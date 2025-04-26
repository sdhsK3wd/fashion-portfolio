'use client';

import { useEffect, useState } from 'react';

type Illustration = {
    id: number;
    title: string;
    imageUrl: string;
    story: string;
};

export default function GalleryPage() {
    const [illustrations, setIllustrations] = useState<Illustration[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:5096/api/illustrations')
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                setIllustrations(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('API Fehler:', err);
                setError('Fehler beim Laden der Illustrationen.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <main className="bg-[#0a001a] min-h-screen flex items-center justify-center text-purple-300 font-sans">
                <p>Lade Illustrationen...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="bg-[#0a001a] min-h-screen flex items-center justify-center text-red-400 font-sans">
                <p>{error}</p>
            </main>
        );
    }

    return (
        <main className="bg-[#0a001a] min-h-screen px-6 py-10 text-gray-200 font-sans">
            <h1 className="text-4xl font-bold text-purple-500 text-center mb-10">Meine Looks</h1>

            <div className="flex flex-col items-center gap-16">
                {illustrations.map((item) => (
                    <div
                        key={item.id}
                        className="relative group w-full max-w-md"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center px-4">
                            <p className="text-purple-200 text-sm">{item.story}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
