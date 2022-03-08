const CracoWorkboxPlugin = require('craco-workbox');
const { whenProd } = require("@craco/craco");


module.exports = {
    reactScriptsVersion: "react-scripts",
    Plugins: [
        {
            plugin: {
                ...whenProd(() => {
                    console.log("Generating Service Worker")
                    return CracoWorkboxPlugin;
                }, []),

            },
            options: {}

        },

    ]
}

