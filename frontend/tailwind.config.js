/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                endVoid: '#000000',
                endBase: '#1b0033',
                endAccent: '#5b1aa0',
                endGlow: '#9446d3',
                endCrystal: '#cc70ff',
            },
        },
    },
    plugins: [],
};
