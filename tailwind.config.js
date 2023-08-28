const { typewindTransforms } = require('typewind/transform');

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

    theme: {
        extend: {
            height: {
                '100dvh': '100vh',
            },

            colors: {
                red: '#f05b4c',
            },

            fontFamily: {
                display: ['var(--font-questrial)'],
                body: ['var(--font-raleway)'],
            },
        },
    },

    transform: typewindTransforms,
};
