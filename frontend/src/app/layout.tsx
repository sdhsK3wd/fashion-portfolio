import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-black text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
            <nav className="w-full px-6 py-4 flex justify-between items-center bg-[#0d0d0d] shadow-md">
                <h1 className="text-2xl font-bold text-purple-500">FashionArt</h1>
                <div className="flex gap-6 text-gray-300">
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
