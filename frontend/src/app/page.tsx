'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
    const yourName = 'Nana Smaushia';
    const yourTitle = 'Artist';
    const profilePictureUrl = '/images/Profile.jpg';
    const cvDownloadUrl = '/docs/my-cv.pdf';

    const socialLinks = [
        { platform: 'Mail', url: '#', iconClass: 'fas fa-envelope' },
        { platform: 'X', url: '#', iconClass: 'fab fa-x-twitter' },
        { platform: 'Instagram', url: '#', iconClass: 'fab fa-instagram' },
        { platform: 'GitHub', url: '#', iconClass: 'fab fa-github' },
        { platform: 'LinkedIn', url: '#', iconClass: 'fab fa-linkedin-in' },
        { platform: 'ID', url: '#', iconClass: 'fas fa-id-badge' },
    ];

    const aboutText = `
  I'm a professor at Stanford AI Lab. My research focuses on distributed robotics, 
  programmable matter, and mobile computing. I lead a team exploring reconfigurable 
  robotic systems and intelligent networks.
  `;

    return (
        <main className="bg-gradient-to-b from-black via-[#0a001a] to-purple-900 min-h-screen text-slate-200 font-sans px-6 pt-10 pb-16">
            <div className="container mx-auto max-w-7xl">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    {/* Profilbild und Name */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-purple-400"
                        >
                            <Image
                                src={profilePictureUrl}
                                alt="Profile"
                                width={208}
                                height={208}
                                objectFit="cover"
                                className="object-cover w-full h-full"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-purple-300">{yourName}</h2>
                            <h3 className="text-sm md:text-base text-purple-400">{yourTitle}</h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 flex gap-5 text-purple-300 text-xl"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    aria-label={link.platform}
                                    className="hover:text-purple-100 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={link.iconClass}></i>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Über mich Sektion */}
                    <div className="md:col-span-2">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-[#0f001f]/50 p-8 rounded-lg mb-10 border border-purple-900"
                        >
                            <h2 className="text-xl font-bold text-purple-300 mb-4">About Me</h2>
                            <p className="whitespace-pre-wrap text-slate-200 leading-relaxed">
                                {aboutText}
                            </p>

                            <Link href={cvDownloadUrl} download passHref>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-all duration-300"
                                >
                                    <i className="fas fa-download mr-2"></i>
                                    Download CV
                                </motion.button>
                            </Link>
                        </motion.section>
                    </div>
                </section>
            </div>
        </main>
    );
}
