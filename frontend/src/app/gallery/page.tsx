'use client';
import { useEffect, useState } from 'react';

type Illustration = {
    id: number;
    title: string;
    imageUrl: string;
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
        <main className="bg-[#0a001a] min-h-screen px-6 pt-8 pb-10 text-gray-200 font-sans">
            <div className="flex flex-col items-center gap-32">
                {illustrations.map((item) => (
                    <div key={item.id} className="w-full max-w-md">
                        <img
                            src={item.imageUrl}
                            alt=""
                            className="w-full h-auto mx-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
