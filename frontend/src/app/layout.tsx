import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'FashionArt',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            />
        </head>
        <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <div className="bg-endBase text-endCrystal font-sans min-h-screen">
                <Navbar />
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
