/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("tailwind-scrollbar"),
        require("tailwindcss-animate"),
        require("prettier-plugin-tailwindcss"),
    ],
};
