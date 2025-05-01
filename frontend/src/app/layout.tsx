// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        {/* Hintergrund auf Weiß oder sehr helles Grau ändern, Textfarbe auf dunkel ändern */}
        <body className="bg-white text-gray-900"> {/* Beispiel: Weißer Hintergrund, sehr dunkler Text */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}> {/* defaultTheme vielleicht auf 'light' ändern */}
            {/* Navigation: Hintergrund und Textfarben für hellen Hintergrund anpassen */}
            <nav className="w-full px-6 py-4 flex justify-between items-center bg-gray-200 shadow-md border-b border-gray-300 text-gray-800"> {/* Beispiel: Heller Navi-Hintergrund, dunkler Text */}
                <h1 className="text-2xl font-bold text-gray-900">FashionArt</h1> {/* Titel in dunkler Farbe */}
                <div className="flex gap-6"> {/* Textfarbe kommt vom übergeordneten Element (nav) */}
                    <a href="/" className="hover:text-gray-600">Home</a> {/* Hover-Farbe anpassen */}
                    <a href="/gallery" className="hover:text-gray-600">Galerie</a>
                    <a href="/contact" className="hover:text-gray-600">Kontakt</a>
                </div>
            </nav>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}