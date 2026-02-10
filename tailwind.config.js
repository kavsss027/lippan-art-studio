/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                terracotta: {
                    DEFAULT: '#D87C54',
                    light: '#E8A080',
                    dark: '#B86644',
                },
                sand: {
                    DEFAULT: '#F5E9DA',
                    light: '#FAF6F0',
                },
                mud: {
                    DEFAULT: '#7A4E32',
                    dark: '#5C3A24',
                },
                charcoal: '#2A2A2A',
                stone: '#6B6B6B',
                silver: '#D9D9D9',
                gold: {
                    DEFAULT: '#D4B978',
                    light: '#E5D4A1',
                },
            },
            fontFamily: {
                heading: ['Playfair Display', 'Cormorant Garamond', 'serif'],
                body: ['Inter', 'Poppins', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
}
