/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a1a1a', // Example dark color
                secondary: '#f3f4f6', // Example light color
            }
        },
    },
    plugins: [],
}
