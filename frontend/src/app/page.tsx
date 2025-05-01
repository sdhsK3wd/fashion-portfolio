// app/page.tsx - Beispielhafte Anpassungen für hellen Hintergrund
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Optional: Import für Font Awesome React Componenten
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function HomePage() {
    // ... (deine Variablen wie yourName, yourTitle, etc. bleiben gleich)
    const yourName = "Dein Name";
    const yourTitle = "Dein Titel / Beruf";
    const profilePictureUrl = "/images/my-profile.jpg";
    const cvDownloadUrl = "/docs/my-cv.pdf";

    const socialLinks = [
        { platform: 'Twitter', url: '#dein-twitter-link', iconClass: 'fab fa-twitter' },
        { platform: 'LinkedIn', url: '#dein-linkedin-link', iconClass: 'fab fa-linkedin-in' },
        { platform: 'GitHub', url: '#dein-github-link', iconClass: 'fab fa-github' },
    ];

    const interests = [
        "Dein Interesse 1",
        "Dein Interesse 2",
        "Dein Interesse 3",
    ];

    const education = [
        "Deine Ausbildung 1 (Abschluss, Institution)",
        "Deine Ausbildung 2 (Abschluss, Institution)",
    ];

    const aboutText = `
        Hallo! Ich bin ${yourName}, ${yourTitle}. ...
        `; // Dein Text hier


    return (
        // main Tag: Hintergrund auf weiß, Standardtextfarbe auf dunkel
        <main className="bg-white text-gray-900 min-h-screen font-sans px-6 py-10">
            <div className="container mx-auto max-w-7xl">

                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">

                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl" // Randfarbe kann bleiben oder angepasst werden
                        >
                            <Image
                                src={profilePictureUrl}
                                alt={`${yourName} Profilbild`}
                                width={256}
                                height={256}
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-purple-700">{yourName}</h2> {/* Dunklere lila Farbe für Überschrift */}
                            <h3 className="text-lg md:text-xl text-gray-700 mt-2">{yourTitle}</h3> {/* Dunklere graue Farbe */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8 flex space-x-6 text-purple-600 text-2xl" // Akzentfarbe für Icons
                        >
                            {socialLinks.map(link => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    aria-label={link.platform}
                                    className="hover:text-purple-800 transition-colors" // Dunklere Hover-Farbe
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={link.iconClass}></i>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    <div className="md:col-span-2">
                        {/* Sektionshintergrund auf sehr helles Grau ändern */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-gray-100 p-8 rounded-lg shadow-md mb-10 border border-gray-300" // Heller Hintergrund, hellerer Rand
                        >
                            <h2 className="text-2xl font-bold text-purple-700 mb-4">Über mich</h2> {/* Dunklere Überschrift */}
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap"> {/* Dunklerer Text */}
                                {aboutText}
                            </p>
                            <Link href={cvDownloadUrl} download passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform" // Button-Farbe kann bleiben oder angepasst werden
                                >
                                    Lebenslauf herunterladen
                                </motion.button>
                            </Link>
                        </motion.section>

                        {/* Interessen Sektion */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-gray-100 p-8 rounded-lg shadow-md mb-10 border border-gray-300" // Heller Hintergrund, hellerer Rand
                        >
                            <h2 className="text-2xl font-bold text-purple-700 mb-4">Interessen</h2> {/* Dunklere Überschrift */}
                            <ul className="list-disc list-inside text-gray-700 space-y-2"> {/* Dunklerer Text */}
                                {interests.map((interest, index) => <li key={index}>{interest}</li>)}
                            </ul>
                        </motion.section>

                        {/* Ausbildung Sektion */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-300" // Heller Hintergrund, hellerer Rand
                        >
                            <h2 className="text-2xl font-bold text-purple-700 mb-4">Ausbildung</h2> {/* Dunklere Überschrift */}
                            <ul className="list-disc list-inside text-gray-700 space-y-2"> {/* Dunklerer Text */}
                                {education.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </motion.section>
                    </div>

                </section>

            </div>
        </main>
    );
}