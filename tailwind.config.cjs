const { default: daisyui } = require('daisyui');

module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
