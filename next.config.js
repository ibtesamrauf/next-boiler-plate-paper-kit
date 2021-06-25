const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png'],
        /* config for next-optimized-images */
    }],
    // your other plugins here
]);
