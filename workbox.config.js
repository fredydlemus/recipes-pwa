

module.exports = {
    GenerateSW: options => {
        // override GenerateSW config here
        // e.g. options.skipWaiting = true;
        return options;
    },

    InjectManifest: options => {

        options.swSrc = './src/service-worker.js';
        options.swDest = 'build/sw.js';


        return options;
    }
}