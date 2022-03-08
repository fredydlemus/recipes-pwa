

module.exports = {

    InjectManifest: options => {
        console.log('InjectManifest');
        options.swSrc = './src/service-worker.js';
        options.swDest = 'build/sw.js';
        options.globDirectory = 'build';
        options.globPatterns = ['**/*.{html,js,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'];
        options.globIgnores = ['workbox-cli-config.js', 'workbox-config.js', 'workbox-v4.3.1.js', 'workbox-sw.js', 'workbox-v4.3.1.js.map', 'workbox-sw.js.map'];
        return options;
    }
}