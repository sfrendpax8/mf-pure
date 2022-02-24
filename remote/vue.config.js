// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { ModuleFederationPlugin } = require("webpack").container;

const port = 8081;
const projectName = 'remote';

module.exports = {
  configureWebpack: {
    // entry: './src/main.js',
    devtool: 'source-map',
    cache: false,
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote',
        filename: 'remoteEntry.js',
        exposes: {
          './Test': './src/Test.vue',
        },
        // library: { type: 'var', name: 'vue3app' },
        // shared: ['vue', 'vue-router']
        // shared: require("./package.json").dependencies,
      }),
    ],
  },
  chainWebpack: config => {
    // config.devServer
    //   .headers({
    //     "Access-Control-Allow-Origin": "*",
    //   })

    config.optimization.delete("splitChunks");
    // config.output.libraryTarget("umd");
  },

  // In this scope, we put stuff available through Vue Configuration Reference
  publicPath: `http://localhost:${port}/`,
  devServer: {
    // https: false,
    // host: 'localhost',
    port,
    // allowedHosts: 'all',
  },
  // filenameHashing: false,
  // css: {
  //   extract: false,
  // },
};

