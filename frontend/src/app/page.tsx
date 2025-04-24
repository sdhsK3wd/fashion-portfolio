// app/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Optional: Import für Font Awesome React Componenten, falls du diese Methode nutzt
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function HomePage() {
    // Passe diese Details an deine Informationen an
    const yourName = "Dein Name";
    const yourTitle = "Dein Titel / Beruf";
    // Stelle sicher, dass dieses Bild in deinem public Ordner ist (z.B. public/images/my-profile.jpg)
    const profilePictureUrl = "/images/my-profile.jpg"; // Passe den Pfad an
    // Stelle sicher, dass deine CV-Datei im public Ordner ist (z.B. public/docs/my-cv.pdf)
    const cvDownloadUrl = "/docs/my-cv.pdf"; // Passe den Pfad an

    const socialLinks = [
        { platform: 'Twitter', url: '#dein-twitter-link', iconClass: 'fab fa-twitter' /* oder FontAwesomeIcon Component */ },
        { platform: 'LinkedIn', url: '#dein-linkedin-link', iconClass: 'fab fa-linkedin-in' /* oder FontAwesomeIcon Component */ },
        { platform: 'GitHub', url: '#dein-github-link', iconClass: 'fab fa-github' /* oder FontAwesomeIcon Component */ },
        // Füge weitere hinzu und passe die Links an
    ];

    const interests = [
        "Dein Interesse 1 (z.B. Digitale Kunst)",
        "Dein Interesse 2 (z.B. Fotografie)",
        "Dein Interesse 3 (z.B. Webdesign)",
        // Füge weitere hinzu
    ];

    const education = [
        "Deine Ausbildung 1 (z.B. Bachelor in Mode Design, FH sowieso)",
        "Deine Ausbildung 2 (z.B. Weiterbildung Digitale Illustration, Online Akademie)",
        // Füge weitere hinzu
    ];

    const aboutText = `
        Hallo! Ich bin ${yourName}, ${yourTitle}. Ich bin leidenschaftlich in den Bereichen...
        (Füge hier deinen "Über mich" Text ein. Erzähle von dir, deinen Fähigkeiten, Erfahrungen und was dich motiviert.)
        Meine Arbeit umfasst... (Erwähne vielleicht die Art von Illustrationen, die du machst, oder deine Designphilosophie.)
        Schau dir gerne meine Galerie an, um Beispiele meiner Arbeit zu sehen!
        `;


    return (
        // main Tag mit Hintergrundfarbe, minimaler Höhe und Padding
        <main className="bg-[#0a001a] min-h-screen text-purple-100 font-sans px-6 py-10">
            {/* Container für Zentrierung und maximale Breite */}
            <div className="container mx-auto max-w-7xl">

                {/* Hauptsektion: Grid für 2 Spalten auf mittleren/großen Bildschirmen */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start"> {/* Abstand zwischen Spalten */}

                    {/* Linke Spalte: Bild und Social Icons */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        {/* Profilbild Container mit Rahmen und Schatten */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-600 shadow-xl" // Rahmenfarbe und Schatten angepasst
                        >
                            {/* Stelle sicher, dass der Pfad korrekt ist und das Bild existiert */}
                            <Image
                                src={profilePictureUrl}
                                alt={`${yourName} Profilbild`}
                                width={256} // Sollte der Größe des Containers entsprechen oder größer sein
                                height={256} // Sollte der Größe des Containers entsprechen oder größer sein
                                objectFit="cover"
                                className="object-cover w-full h-full" // Sicherstellen, dass das Bild den Container ausfüllt
                            />
                        </motion.div>

                        {/* Name und Titel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8" // Abstand nach oben angepasst
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-purple-400">{yourName}</h2> {/* Schriftgröße angepasst */}
                            <h3 className="text-lg md:text-xl text-purple-300 mt-2">{yourTitle}</h3> {/* Schriftgröße und Abstand angepasst */}
                        </motion.div>

                        {/* Social Media Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8 flex space-x-6 text-purple-400 text-2xl" // Abstand und Größe angepasst
                        >
                            {socialLinks.map(link => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    aria-label={link.platform}
                                    className="hover:text-purple-300 transition-colors" // Hover-Farbe angepasst
                                    target="_blank" // Link in neuem Tab öffnen
                                    rel="noopener noreferrer" // Sicherheitsattribute
                                >
                                    {/* Nutze entweder i-Tag mit Font Awesome Klasse */}
                                    <i className={link.iconClass}></i>
                                    {/* Oder nutze Font Awesome React Component, z.B.: */}
                                    {/* {link.platform === 'Twitter' && <FontAwesomeIcon icon={faTwitter} />} */}
                                    {/* {link.platform === 'LinkedIn' && <FontAwesomeIcon icon={faLinkedinIn} />} */}
                                    {/* {link.platform === 'GitHub' && <FontAwesomeIcon icon={faGithub} />} */}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Rechte Spalte: About, Interests, Education */}
                    <div className="md:col-span-2">
                        {/* Über mich Sektion */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-[#1a0033] p-8 rounded-lg shadow-md mb-10 border border-purple-700" // Padding und Abstand unten angepasst
                        >
                            <h2 className="text-2xl font-bold text-purple-400 mb-4">Über mich</h2>
                            <p className="text-purple-200 leading-relaxed whitespace-pre-wrap"> {/* whitespace-pre-wrap für Umbrüche im Text */}
                                {aboutText}
                            </p>
                            {/* Download CV Button */}
                            <Link href={cvDownloadUrl} download passHref>
                                {/* Füge hier den Inhalt des Link-Tags ein, z.B. einen Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform" // Styling angepasst: runder, größer, Schatten, Transition
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
                            className="bg-[#1a0033] p-8 rounded-lg shadow-md mb-10 border border-purple-700" // Padding und Abstand unten angepasst
                        >
                            <h2 className="text-2xl font-bold text-purple-400 mb-4">Interessen</h2>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                {interests.map((interest, index) => <li key={index}>{interest}</li>)}
                            </ul>
                        </motion.section>

                        {/* Ausbildung Sektion */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="bg-[#1a0033] p-8 rounded-lg shadow-md border border-purple-700" // Padding angepasst
                        >
                            <h2 className="text-2xl font-bold text-purple-400 mb-4">Ausbildung</h2>
                            <ul className="list-disc list-inside text-purple-200 space-y-2">
                                {education.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </motion.section>
                    </div>

                </section>

                {/* Optional: Ein weiterer Abschnitt, z.B. eine Vorschau der Galerie */}
                {/* Füge hier den auskommentierten Abschnitt von vorhin wieder ein, falls gewünscht */}

            </div> {/* Ende container */}
        </main>
    );
}