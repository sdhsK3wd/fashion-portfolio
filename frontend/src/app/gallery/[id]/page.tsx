'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function LookDetailPage() {
    const params = useParams();
    const { id } = params;
    const [look, setLook] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5096/api/illustrations/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`API returned status ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setLook(data))
            .catch((err) => {
                console.error(err);
                setError("Fehler beim Laden der Daten oder ungültige ID.");
            });
    }, [id]);

    if (error) return <p className="text-red-500 p-6">{error}</p>;
    if (!look) return <p className="text-white p-6">Loading...</p>;

    return (
        <main className="bg-black text-gray-100 min-h-screen p-10">
            <h1 className="text-3xl font-bold text-purple-500 mb-6">{look.title}</h1>
            <img src={look.imageUrl} alt={look.title} className="w-full max-w-2xl object-cover rounded-lg mb-6" />
            <p className="text-gray-400">Weitere Informationen über das Design kommen hier hin...</p>
        </main>
    );
}
