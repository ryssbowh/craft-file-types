const path = require('path');

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    runtimeCompiler: true,
    outputDir: 'vue/dist',
    css: {
        extract: false,
    },
    chainWebpack: config => {
        config.entryPoints.delete("app").end();
        config.plugins
        .delete("html")
        .delete("prefetch")
        .delete("preload");
    },
    configureWebpack: {
        entry: {
            main: "./vue/src/main.js",
        },
        output: {
            filename: "js/[name].js",
            chunkFilename: "js/[name].js"
        },
        resolve: {
          alias: {
            vue: path.resolve('./node_modules/vue')
          }
        }
    }
}