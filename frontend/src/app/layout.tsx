// app/layout.tsx
import './globals.css'; // Dein globales CSS
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Font Awesome CDN Link */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
            {/* Weitere head Elemente wie title, meta etc. */}
        </head>
        <body className="bg-[#0a001a] text-gray-100"> {/* Oder dein Theme-Handler */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
            <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#1a0033] shadow-md border-b border-purple-700">
                <h1 className="text-2xl font-bold text-purple-400">FashionArt</h1>
                <div className="flex gap-6 text-purple-200">
                    <a href="/">Home</a>
                    <a href="/gallery">Galerie</a>
                    <a href="/contact">Kontakt</a>
                </div>
            </nav>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}