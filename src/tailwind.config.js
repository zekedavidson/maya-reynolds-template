/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                // 1750px is the sweet spot. 
                // It is wider than your laptop (approx 1707px), 
                // but likely smaller than your monitor (1920px+).
                '3xl': '1600px',
            },
        },
    },
    plugins: [],
}