const { typewindTransforms } = require('typewind/transform');

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

    theme: {
        colors: {
            white: '#ffffff',

            red: '#f05b4c',

            gray: '#393939',
        },

        fontFamily: {
            display: ['var(--font-questrial)'],
            body: ['var(--font-raleway)'],
        },

        extend: {
            height: {
                '100dvh': '100vh',
            },
        },
    },

    transform: typewindTransforms,
};
