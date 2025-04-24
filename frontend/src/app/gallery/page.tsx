'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
// react-masonry-css wird für diesen Ansatz nicht benötigt

type Illustration = {
    id: number;
    title: string;
    imageUrl: string;
};

export default function GalleryPage() {
    const [illustrations, setIllustrations] = useState<Illustration[]>([]);
    const [loading, setLoading] = useState(true); // Ladezustand hinzufügen
    const [error, setError] = useState<string | null>(null); // Fehlerzustand hinzufügen

    useEffect(() => {
        fetch('http://localhost:5096/api/illustrations')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setIllustrations(data);
                setLoading(false); // Laden beendet
            })
            .catch((err) => {
                console.error('API Fehler:', err);
                setError('Fehler beim Laden der Illustrationen.'); // Fehler setzen
                setLoading(false); // Laden beendet
            });
    }, []);

    // Eine Funktion, die bestimmt, wie breit ein Element im Grid sein soll.
    // Dies ist ein einfaches Beispiel. Wenn dein Backend die Größe zurückgibt,
    // könntest du diese hier verwenden. Ansonsten musst du sie hier im Frontend
    // basierend auf dem Index oder einer anderen Logik festlegen.
    const getItemColumnSpan = (index: number) => {
        // Beispiel-Logik: Jedes 3. Element (startend bei 0) nimmt auf md und lg mehr Platz ein
        if ((index + 1) % 3 === 0) {
            return 'col-span-1 sm:col-span-2 lg:col-span-2'; // Nimmt auf sm/lg 2 Spalten ein
        }
        // Alle anderen Elemente nehmen Standard-Spalten ein
        return 'col-span-1';
    };

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
            <h1 className="text-4xl font-bold text-purple-500 text-center mb-10 tracking-wide">Meine Looks</h1>

            {/* Verwende Tailwind Grid anstelle von Masonry */}
            {/* Das Grid hat 3 Spalten auf großen Bildschirmen (lg), 2 auf mittleren (md) und 1 auf kleinen (sm) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Erhöhter Gap für mehr Abstand */}
                {illustrations.map((item, index) => (
                    // Jedes Link-Element ist ein Grid-Item
                    // Nutze getItemColumnSpan, um die Spaltenbreite dynamisch zu setzen
                    <Link key={item.id} href={`/gallery/${item.id}`} passHref className={`${getItemColumnSpan(index)} group cursor-pointer block`}>
                        {/* Das div innen ist der Container für Bild und Overlay */}
                        {/* Füge rounded, overflow, shadow und relative hinzu */}
                        <div className="relative rounded-xl overflow-hidden shadow-lg bg-[#1a1a1a]">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                // Bild nimmt die volle Breite, Höhe ist automatisch
                                // Transition für den Zoom-Effekt
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay für den Hover-Effekt */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-xl text-purple-300 font-bold tracking-wide">{item.title}</h2> {/* Textfarbe angepasst */}
                                {/* Wenn du eine Kategorie hast, kannst du sie hier hinzufügen */}
                                {/* <h3 className="text-sm text-purple-200 mt-1">Kategorie</h3> */}
                            </div>
                        </div>
                        {/* Bereich unter dem Bild für sichtbaren Titel/Kategorie (Optional, falls gewünscht wie im HTML Beispiel) */}
                        {/* <div className="p-4">
                              <h2 className="text-lg text-purple-400 font-semibold">{item.title}</h2>
                                {/* <h3 className="text-sm text-gray-400">Kategorie</h3> */}
                        {/* </div> */}
                    </Link>
                ))}
            </div>
        </main>
    );
}